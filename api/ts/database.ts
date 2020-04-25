import {resolve} from 'path';
import {config} from 'dotenv';
config({path: resolve(__dirname, '../../frontend/.env')});
import {Sequelize} from 'sequelize';

const dbName = process.env.POSTGRES_DB || '';
const dbUser = process.env.POSTGRES_USER || '';
const dbPassword = process.env.POSTGRES_PASSWORD || '';
const dbHost = process.env.POSTGRES_HOST || '';
const dbPort = process.env.POSTGRES_PORT || '';

export const database = new Sequelize(dbName, dbUser, dbPassword, {
  pool: {
    max: 1,
    min: 0,
  },
  define: {
    freezeTableName: true,
  },
  dialect: 'postgres',
  host: dbHost,
  port: parseInt(dbPort, 10),
  // tslint:disable-next-line:object-shorthand-properties-first
  ssl: true,
});
