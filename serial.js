http = require('http');
fs = require('fs');

port = 3000;
host = '127.0.0.1';

server = http.createServer( function(req, res) {
    var SerialPort= require('serial-node'), serial = new SerialPort();
    serial.use('COM3');
    if (req.method == 'POST') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            serial.open();
            var obj = JSON.parse(body);
            if (obj.round.bomb === 'planted') {
                serial.write('p');
                console.log("Bomba Plantada");
            }
            
            serial.close();
            
        });
    }
    else
    {
        console.log("Outro tipo de request foi recebido");
        res.writeHead(200, {'Content-Type': 'text/html'});
		var html = '<html><body>HTTP Server at http://' + host + ':' + port + '</body></html>';
        res.end(html);
    }

});

server.listen(port, host);
console.log('Recebendo informacoes de' + host + ':' + port);