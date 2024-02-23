import express from 'express';
import { readFileSync } from 'node:fs';
import { getSuccessResponse } from './Helper/response.js';

const app = express();
const tours = JSON.parse(
  readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);
app.get('/api/v1/tours', (req, res) => {
  getSuccessResponse(res, 'tours', tours);
});
app.listen(8000, () => {
  console.log('Server started');
});
