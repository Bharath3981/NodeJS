import { readFileSync } from 'node:fs';
import {
  getBadResponse,
  getNotFoundResponse,
  getSuccessResponse,
} from '../Helper/response.js';

const tours = JSON.parse(
  readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);
const tourController = {
  getTour: (req, res) => {
    console.log(req.params);
    let id = req.params.id * 1;
    let tour = undefined;
    tour = tours.find((tour) => tour.id === id);
    if (tour) {
      getSuccessResponse(res, 'tour', tour);
    } else {
      getNotFoundResponse(res);
    }
  },
  getTours: (req, res) => {
    console.log(req.requestTime);
    getSuccessResponse(res, 'tours', tours);
  },
  addTour: (req, res) => {
    console.log(req.body);
    res.send('Data recevied');
  },
  checkId: (req, res, next, val) => {
    if (val * 1 > tours.lenght) {
      return getNotFoundResponse(res);
    }
    next();
  },
  validateBody: (req, res, next) => {
    if (!req.body.name || !req.body.price) {
      return getBadResponse(res);
    }
    next();
  },
};
export default tourController;
