import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateEnrollmentInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int, { nullable: true })
  courseId?: number;
}
