import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Course {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}
