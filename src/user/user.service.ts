import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repo: UserRepository) {}

  create(data: CreateUserInput) {
    return this.repo.create(data);
  }

  findAll(skip?: number, take?: number) {
    return this.repo.findAll({ skip, take });
  }

  async findOne(id: number) {
    const user = await this.repo.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  update(id: number, data: UpdateUserInput) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.remove(id);
  }

  findByEmail(email: string) {
    return this.repo.findByEmail(email);
  }
}
