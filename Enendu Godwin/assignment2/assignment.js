const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  if (req.url === '/') {
er
    res.writeHead(200, {'Content-Type': 'text/html'});

  
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) throw err;

      const userInput = 'Hello World'; 
      const html = data.replace('{{input}}', userInput);

      
      res.write(html);
      res.end();
    });
  }
});


server.listen(3000, () => {
  console.log('Server running on  http://127.0.01:3000/');
});


