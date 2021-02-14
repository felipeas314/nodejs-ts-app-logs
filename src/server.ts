import "reflect-metadata";

import connectionFactory from './app/database/postgres';
import express from 'express';
import route from './routes';


// const server = express();

// server.use(express.json());
// server.use('/api/v1',routes);

// export default server;

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

  async configExpress(){
    this.server.use(express.json());
  }

  async database(){
    await connectionFactory();
  }

  routes(){
    this.server.use('/api/v1',route());
  }
}

export default Server;