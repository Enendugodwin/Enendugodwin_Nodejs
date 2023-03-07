var fs = require('fs');
var myInterface = readline.createInterface({
  input: fs.createReadStream('demofile1.html')
});
var lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});



// To handle readable streams one line at the time
// Open a file and return the content line by line