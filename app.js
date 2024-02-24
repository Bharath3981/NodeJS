import express from 'express';
import { readFileSync } from 'node:fs';
import { getSuccessResponse, getNotFoundResponse } from './Helper/response.js';

const app = express();
app.use(express.json());
const tours = JSON.parse(
  readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);
const getTour = (req, res) => {
  console.log(req.params);
  let id = req.params.id * 1;
  let tour = undefined;
  tour = tours.find((tour) => tour.id === id);
  if (tour) {
    getSuccessResponse(res, 'tour', tour);
  } else {
    getNotFoundResponse(res);
  }
};
const getTours = (req, res) => {
  getSuccessResponse(res, 'tours', tours);
};
const addTour = (req, res) => {
  console.log(req.body);
  res.send('Data recevied');
};

// app.get('/api/v1/tours', getTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', addTour);

app.route('/api/v1/tours').get(getTours).post(addTour);
app.route('/api/v1/tours/:id').get(getTour);

app.listen(8000, () => {
  console.log('Server started');
});
