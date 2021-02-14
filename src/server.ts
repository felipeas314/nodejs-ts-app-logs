import "reflect-metadata";
import express from 'express';
import routes from './routes';

import './app/database/postgres';

const server = express();

server.use(express.json());
server.use('/api/v1',routes);

export default server;