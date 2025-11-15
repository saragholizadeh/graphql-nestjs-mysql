import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Course } from 'src/course/course.model';
import { User } from 'src/user/user.model';

@ObjectType()
export class Enrollment {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  courseId: number;

  @Field(() => User)
  user: User;

  @Field(() => Course)
  course: Course;
}
