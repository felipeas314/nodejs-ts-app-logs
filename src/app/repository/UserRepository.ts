import {getRepository, Repository} from "typeorm";

import { User } from '../models/User';

class UserRepository {
  
  private userRepository: Repository<User>;

  constructor(){
    this.userRepository = getRepository(User);
  }

  async create(userDTO: User){
    const user = await this.userRepository.save(userDTO);
    console.log('user: ',user);
  }

}

export default UserRepository;