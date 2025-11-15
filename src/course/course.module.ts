import { Module } from '@nestjs/common';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';
import { CourseRepository } from './course.repository';

@Module({
  providers: [CourseResolver, CourseService, CourseRepository],
})
export class CourseModule {}
