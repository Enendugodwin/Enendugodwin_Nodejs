var dgram = require('dgram');
var t = dgram.createSocket('udp4');
t.on('message', function(msg, rinfo) {
  console.log('I got this message: ' + msg.toString());
});
t.bind(8080);


// Provides implementation of UDP datagram sockets
// Make a file ("demo_dgram.js") that listens for messages on port 8080


