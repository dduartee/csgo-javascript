#include <LiquidCrystal.h>

const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup() {
  // put your setup code here, to run once:
  lcd.begin(16, 2);
  lcd.clear();
  Serial.begin(9600);

  
}

void loop() {
  // put your main code here, to run repeatedly:
  
  while (Serial.available() > 0) {
    lcd.clear();
    if (Serial.read() == 'p') {
      lcd.setCursor(0, 0);
      lcd.print("Bomba Plantada");
      for (int i = 2; i <= 39; i++) {
        lcd.setCursor(0, 1);
        lcd.print(i);
        delay(1000);
        if (i == 39) {
          delay(500);
          lcd.clear();
          exit(0);
        }
      }
    }
   }

  }
  
}
