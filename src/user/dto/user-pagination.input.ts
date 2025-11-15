import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UserPaginationInput {
  @Field(() => Int, { defaultValue: 1 })
  page: number;

  @Field(() => Int, { defaultValue: 10 })
  limit: number;
}
