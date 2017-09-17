var SerialPort = require('serialport');
var port = new SerialPort('/');
var Arduino = function() {};

Arduino.prototype.move = function(m) {
  return new Promise((resolve, reject) => {
    var degree = Math.round( m.angle.degree / 30 );
    var speed = Math.round( m.distance ); // From 0 to 50
    var angle;
    // TODO: fix this terrible code
    if (degree === 0)  { angle = 'pr' };
    if (degree === 1)  { angle = 'sr' };
    if (degree === 2)  { angle = 'sr' };
    if (degree === 3)  { angle = 'ps' };
    if (degree === 4)  { angle = 'sl' };
    if (degree === 5)  { angle = 'sl' };
    if (degree === 6)  { angle = 'pl' };
    if (degree === 7)  { angle = 'bl' };
    if (degree === 8)  { angle = 'bl' };
    if (degree === 9)  { angle = 'pb' };
    if (degree === 10) { angle = 'br' };
    if (degree === 11) { angle = 'br' };
    if (degree === 12) { angle = 'pr' };

    // i.e. `move pr at 47`
    var command = 'move ' + String(angle) + ' at ' + String(speed);
    port.write(command, err => {
      if (err) reject(err);
      resolve(command);
    });
  });
};

module.exports = new Arduino();
