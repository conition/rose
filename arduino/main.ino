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
      case 'a':
        msg = "right";
        break;
      case 'b':
        msg = "top right";
        break;
      case 'c':
        msg = "top";
        break;
      case 'd':
        msg = "top left";
        break;
      case 'e':
        msg = "left";
        break;
      case 'f':
        msg = "bottom left";
        break;
      case 'g':
        msg = "bottom";
        break;
      case 'h':
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
