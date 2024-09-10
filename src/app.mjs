import express from 'express';

const app = express();

export const handler = serverless(app);
app.get('/', (req, res) => {
  res.json({ hello: 'hello world' });
});

app.get('/help', (req, res) => {
  res.send('<h2>please hellllllp </h2>');
});

app.listen(4000, () => {
  console.log('the server is running');
});
