import { Sequelize } from 'sequelize';

const config = {
  host: process.env.POSTGRES_HOST ?? 'localhost',
  dialect: 'postgres',
  logging: false,
  port: process.env.POSTGRES_PORT ?? 5432
};

const sequelize = new Sequelize('projectdb', process.env.POSTGRES_USER ?? 'mads', process.env.POSTGRES_PASS ?? '', config);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;

