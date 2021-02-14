// import './app/database/postgres';
import Server from './server';

const server = new Server();

server.init().then(s => {
  s.listen(3000);
})