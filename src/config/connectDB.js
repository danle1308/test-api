import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('dau_gia_gif', 'root', '123456', {
  host: '127.0.0.1',
  dialect: 'mysql' ,
  port: 3306,
  logging: console.log,
}); 

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    console.error('Stack trace:', error.stack);
  }
};


module.exports = connectDB;