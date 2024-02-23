import express from 'express';
import { readFileSync } from 'node:fs';

const app = express();
const tours = JSON.parse(
  readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { tours },
  });
});
app.listen(8000, () => {
  console.log('Server started');
});
