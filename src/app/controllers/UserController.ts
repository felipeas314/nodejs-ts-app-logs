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
    await this.userRepository.create(req.body);
    
    res.status(201).json({
      message: 'User created',
      status: 'CREATED',
      date: new Date()
    })
  }

  public async list(req: Request, res: Response){

  }
  
}

export default UserController;