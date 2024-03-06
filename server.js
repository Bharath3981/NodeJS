import dotenv from 'dotenv';
import Sequelize from 'sequelize';
import { data } from './data.js';
dotenv.config({ path: './config.env' });
const { app } = await import('./app.js');
//import { app } from './app.js';

const connection = new Sequelize('sys', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  await connection.authenticate();
  console.log('Connection has been established successfully.');
  //Start the server
  app.listen(process.env.PORT, () => {
    console.log(
      `\x1b[32m Server is running in the port ${process.env.PORT} ${process.env.NODE_ENV} mode \x1b[0m`
    );
    console.log(`\x1b[32m http://localhost:${process.env.PORT}\x1b[0m`);
  });
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const user = connection.define('User', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  address: Sequelize.STRING,
});

const posts = connection.define('Posts', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
});
user.hasOne(posts);
await connection.sync({ force: true });
await user.bulkCreate(data);
await posts.create({
  UserId: 1,
  title: 'Test',
  description: 'Sequelize.STRING',
});
console.log('All models were synchronized successfully.');
