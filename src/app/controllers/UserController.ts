import { Request, Response } from 'express';
import {injectable,inject} from "tsyringe";

import UserRepository from '../repository/UserRepository';

class UserController {
  
  private userRepository: UserRepository;

  constructor(){
    this.userRepository = new UserRepository();
  }

  public async create(req: Request, res: Response){
    // console.log(req.body);
    const user = await this.userRepository.create(req.body);
    
    res.status(201).json({
      message: 'User created',
      status: 'CREATED',
      date: new Date(),
      content: user
    })
  }

  public async list(req: Request, res: Response){

    let page: number = Number(req.query.page);
    let quantity: number = Number(req.query.quantity);

    const users = await this.userRepository.list(page,quantity);
    
    res.status(200).json({
      message: 'List of users',
      status: 'OK',
      date: new Date(),
      content: users
    })
  }
  
}

export default UserController;