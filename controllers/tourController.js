import { readFileSync } from 'node:fs';
import { getNotFoundResponse, getSuccessResponse } from '../Helper/response.js';

const tours = JSON.parse(
  readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);
export const getTour = (req, res) => {
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
export const getTours = (req, res) => {
  console.log(req.requestTime);
  getSuccessResponse(res, 'tours', tours);
};
export const addTour = (req, res) => {
  console.log(req.body);
  res.send('Data recevied');
};
