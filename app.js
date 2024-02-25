import express from 'express';
import { readFileSync } from 'node:fs';
import { getSuccessResponse, getNotFoundResponse } from './Helper/response.js';
import morgan from 'morgan';

const app = express();

//MIddelwares
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello form the middleware');
  req.requestTime = new Date().toISOString();
  next();
});

//Router handlers
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
  console.log(req.requestTime);
  getSuccessResponse(res, 'tours', tours);
};
const addTour = (req, res) => {
  console.log(req.body);
  res.send('Data recevied');
};

//Rouestes
app.route('/api/v1/tours').get(getTours).post(addTour);
app.route('/api/v1/tours/:id').get(getTour);

//Start the server
app.listen(8000, () => {
  console.log('Server started');
});
