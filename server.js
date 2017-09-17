PORT = process.env.PORT || 8080;

var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var arduino = require('./arduino');

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile( path.join(__dirname, 'index.html') );
});

app.get('/about', (req, res) => {
  res.sendFile( path.join(__dirname, 'about.html') );
})

io.on('connection', socket => {
  socket.on('move', e => {
    arduino.move(e);
  });
});

server.listen(PORT, function(err) {
  if (err) throw err;

  console.log(`Server started on port ${ PORT }`);
});

module.exports = app;