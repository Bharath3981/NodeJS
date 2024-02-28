import express from 'express';
import tourController from '../controllers/tourController.js';

const tourRouter = express.Router();
console.log(process.env.NODE_ENV);
tourRouter.param('id', tourController.checkId);
tourRouter
  .route('/')
  .get(tourController.getTours)
  .post(tourController.validateBody, tourController.addTour);
tourRouter.route('/:id').get(tourController.getTour);

export default tourRouter;
