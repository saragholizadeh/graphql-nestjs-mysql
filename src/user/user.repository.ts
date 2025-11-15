import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { BaseRepository } from 'common/base.repository';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserRepository extends BaseRepository<
  User,
  CreateUserInput,
  UpdateUserInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, prisma.user);
  }

  findByEmail(email: string) {
    return this.model.findUnique({ where: { email } });
  }
}
