import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Query(() => [User], { name: 'users' })
  async findAll(
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
  ) {
    return this.usersService.findAll(skip, take);
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  // ---------------------------
  // MUTATIONS
  // ---------------------------

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput) {
    return this.usersService.create(data);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateUserInput,
  ) {
    return this.usersService.update(id, data);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
