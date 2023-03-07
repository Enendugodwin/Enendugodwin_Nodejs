var StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf8');
var b = Buffer('abc');
console.log(b); 
console.log(d.write(b)); 

// To decode buffer objects into strings
// Decode a stream of binary data (a buffer object) into a string