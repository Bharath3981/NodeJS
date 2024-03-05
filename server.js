import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
const { app } = await import('./app.js');
//import { app } from './app.js';

console.log('From Server: ', process.env.NODE_ENV);

//Start the server
app.listen(process.env.PORT, () => {
  console.log('Server started', process.env.NODE_ENV);
});
