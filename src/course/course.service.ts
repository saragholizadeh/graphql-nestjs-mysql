import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from './course.repository';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { CoursePaginationInput } from './dto/course-pagination.input';

@Injectable()
export class CourseService {
  constructor(private repo: CourseRepository) {}

  create(data: CreateCourseInput) {
    return this.repo.create(data);
  }

  findAll(pagination: CoursePaginationInput) {
    const { page, limit } = pagination;
    return this.repo.findAll({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findOne(id: number) {
    const course = await this.repo.findById(id);
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }

  update(data: UpdateCourseInput) {
    const { id, ...rest } = data;
    return this.repo.update(id, rest);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
