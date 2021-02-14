import "reflect-metadata";

import './app/database/postgres';

import express from 'express';
import routes from './routes';


const server = express();

server.use(express.json());
server.use('/api/v1',routes);

export default server;