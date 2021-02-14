import { Router, Request, Response, } from 'express';

const routes = Router();

routes.get('/health',(req: Request, res: Response) => {
  res.status(200).json({
    message: 'Server UP!',
    date: new Date(),
    status: 'OK'
  })
})

export default routes