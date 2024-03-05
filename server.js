import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
const { app } = await import('./app.js');
//import { app } from './app.js';

//Start the server
app.listen(process.env.PORT, () => {
  console.log(
    `\x1b[32m Server is running in the port ${process.env.PORT} ${process.env.NODE_ENV} mode \x1b[0m`
  );
});
