import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to express');
});
app.listen(8000, () => {
  console.log('SErvier started');
});
