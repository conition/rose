int incomingByte = 0;   // for incoming serial data

void setup() {
  Serial.begin(9600);     // opens serial port, sets data rate to 9600 bps
}

void loop() {
  if (Serial.available() > 0) {
    String msg;
    incomingByte = Serial.read();
    // TODO: remove switch statement
    switch (incomingByte) {
      case 97:
        msg = "right";
        break;
      case 98:
        msg = "top right";
        break;
      case 99:
        msg = "top";
        break;
      case 100:
        msg = "top left";
        break;
      case 101:
        msg = "left";
        break;
      case 102:
        msg = "bottom left";
        break;
      case 103:
        msg = "bottom";
        break;
      case 104:
        msg = "bottom right";
        break;
    }
    
    move(msg);
    Serial.println(msg);
  }
}

void move(String d) {
  // TODO: move motors according to direction
  // TODO: add speed capability
}