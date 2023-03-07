var querystring = require('querystring');
var w= querystring.parse('year=2017&month=february');
console.log(w.year);


// To handle URL query strings
// Parse a query string into an object, and extract the year property

