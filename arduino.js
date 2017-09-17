// Init serial port
var SerialPort = require('serialport');
// Add text parser
var ReadLine = SerialPort.parsers.Readline;
// Listen to port
var port = new SerialPort('/dev/cu.usbmodem1411', {
  baud: 57600
});
// Init parser
var parser = new ReadLine();
// Pipe data to parser
port.pipe(parser);

var Arduino = function() {};

Arduino.prototype.move = function(m) {
  return new Promise((resolve, reject) => {
    var degree = Math.round( m.angle.degree / 30 );
    var angle;
    // TODO: fix this terrible code
    // perhaps ( degree (not divided by 30) + 90 ) % 360
    if (degree === 0)  { angle = 'a'; }
    if (degree === 1)  { angle = 'b'; }
    if (degree === 2)  { angle = 'b'; }
    if (degree === 3)  { angle = 'c'; }
    if (degree === 4)  { angle = 'd'; }
    if (degree === 5)  { angle = 'd'; }
    if (degree === 6)  { angle = 'e'; }
    if (degree === 7)  { angle = 'f'; }
    if (degree === 8)  { angle = 'f'; }
    if (degree === 9)  { angle = 'g'; }
    if (degree === 10) { angle = 'h'; }
    if (degree === 11) { angle = 'h'; }
    if (degree === 12) { angle = 'a'; }

    // When there's data, log it
    parser.on('data', console.log);
    // Send angle as buffer to Arduino
    port.write(Buffer.from(angle));

  });
};

module.exports = new Arduino();
