//const app = require('./app');
import { app } from './app.js';

//Start the server
app.listen(8000, () => {
  console.log('Server started', process.env.NODE_ENV);
});
