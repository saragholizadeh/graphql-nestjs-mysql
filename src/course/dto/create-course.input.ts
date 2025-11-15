import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCourseInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}
