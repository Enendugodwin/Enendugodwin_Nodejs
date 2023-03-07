const dns= require('assert');

var w3 = dns.lookup('w3schools.com', function (err, addresses, family) {
    console.log(addresses);
  });

//   To do DNS lookups and name resolution functions
// Look up a web address, and write it's IP address