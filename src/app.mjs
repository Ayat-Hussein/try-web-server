import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ hello: 'hello world' });
});

app.get('/help', (req, res) => {
  res.json({ help: 'trying to deploy to a server' });
});

app.listen(4000, () => {
  console.log('the server is running');
});
