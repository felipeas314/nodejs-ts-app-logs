import "reflect-metadata";

import connectionFactory from './app/database/postgres';
import express from 'express';
import route from './routes';

class Server {

  private server: express.Application;

  constructor(){
    this.server = express();
  }

  async init(){
    await this.database()
    this.configExpress();
    this.routes();
    return this.server;
  }
  
  async database(){
    await connectionFactory();
  }

  configExpress(){
    this.server.use(express.json());
  }

  middlewares(){

  }

  routes(){
    this.server.use('/api/v1',route());
  }

  
}

export default Server;