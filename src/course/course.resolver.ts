import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { CoursePaginationInput } from './dto/course-pagination.input';
import { Course } from './course.model';

@Resolver(() => Course)
export class CourseResolver {
  constructor(private service: CourseService) {}

  @Query(() => [Course], { name: 'courses' })
  findAll(
    @Args('pagination', { type: () => CoursePaginationInput, nullable: true })
    pagination: CoursePaginationInput = { page: 1, limit: 10 },
  ) {
    return this.service.findAll(pagination);
  }

  @Query(() => Course, { name: 'course' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => Course)
  createCourse(@Args('data') data: CreateCourseInput) {
    return this.service.create(data);
  }

  @Mutation(() => Course)
  updateCourse(@Args('data') data: UpdateCourseInput) {
    return this.service.update(data);
  }

  @Mutation(() => Course)
  removeCourse(@Args('id', { type: () => Int }) id: number) {
    return this.service.remove(id);
  }
}
