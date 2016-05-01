var portNumber = process.env.NODE_101_PORT;
var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
})

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.post('/hello', (req, res) => {
  res.json({ message: 'Hello World '});
});

app.listen(portNumber);

console.log('Server listening on port ', portNumber);
