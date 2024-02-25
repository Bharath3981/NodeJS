import express from 'express';
import { addTour, getTour, getTours } from '../controllers/tourController.js';

const tourRouter = express.Router();

tourRouter.route('/').get(getTours).post(addTour);
tourRouter.route('/:id').get(getTour);

export default tourRouter;
