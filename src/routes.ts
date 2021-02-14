import { Router, Request, Response, } from 'express';

import UserController from './app/controllers/UserController'

const routes = Router();

const userController = new UserController();

routes.get('/health',(req: Request, res: Response) => {
  res.status(200).json({
    message: 'Server UP!',
    date: new Date(),
    status: 'OK'
  })
})

routes.post('/users',(req: Request, res: Response) => {
  userController.create(req,res);
});

routes.post('/users')

export default routes