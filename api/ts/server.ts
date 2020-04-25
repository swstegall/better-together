import {resolve} from 'path';
import {config} from 'dotenv';
config({path: resolve(__dirname, '../../frontend/.env')});
import express, { NextFunction, Response, Request } from 'express';
import { setupDb } from './connectors';

const apiPort: number = parseInt(`${process.env.REACT_APP_API_PORT}`);

const app = express();

setupDb();

app.use(
  (req: Request, res: Response, next: NextFunction) => {
    if (process.env.ENVIRONMENT !== 'production') {
      res.header('Access-Control-Allow-Origin', '*');
    }
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-Width, Content-Type, Authorization, Accept',
    );
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  },
);

const server = app.listen(apiPort);

const gracefulShutdown = () => {
  // tslint:disable-next-line:no-console
  console.log('Received kill signal, shutting down gracefully.');
  server.close(() => {
    // tslint:disable-next-line:no-console
    console.log('Closed out remaining connections.');
    process.exit(0);
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

console.log(`Server running on: ${apiPort}.`);