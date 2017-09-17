const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('/dev/cu.usbmodem1411', {
  baud: 9600
});
const parser = new Readline();
port.pipe(parser);
var start = false;
parser.on('data', data => {
  console.log(data)
  start = true;
});

setInterval(function() {
  if (start) {
    var sent = '2'.charCodeAt(0);
    console.log('sent', sent);
    port.write(Buffer.from('2'));
  }
}, 1000);
