import { getRepository, Repository } from "typeorm";

import { User } from '../models/User';

class UserRepository {

  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(userDTO: User) {
    const user = await this.repository.save(userDTO);
  }

  async list(page: number, quantity: number): Promise<User[]> {
    return await this.repository.find({
      skip: (page - 1) * quantity,
      take: quantity
    })
  }

}

export default UserRepository;