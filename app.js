import express from 'express';
import { readFileSync } from 'node:fs';
import { getSuccessResponse, getNotFoundResponse } from './Helper/response.js';

const app = express();
app.use(express.json());
const tours = JSON.parse(
  readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);
app.get('/api/v1/tours', (req, res) => {
  getSuccessResponse(res, 'tours', tours);
});

app.get('/api/v1/tours/:id', (req, res) => {
  console.log(req.params);
  let id = req.params.id * 1;
  let tour = undefined;
  tour = tours.find((tour) => tour.id === id);
  if (tour) {
    getSuccessResponse(res, 'tour', tour);
  } else {
    getNotFoundResponse(res);
  }
});

app.post('/api/v1/tours', (req, res) => {
  console.log(req.body);
  res.send('Data recevied');
});

app.listen(8000, () => {
  console.log('Server started');
});
