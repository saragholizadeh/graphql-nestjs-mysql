import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateEnrollmentInput {
  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  courseId: number;
}
