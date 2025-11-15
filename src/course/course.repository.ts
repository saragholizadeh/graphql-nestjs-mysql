import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, Course } from '@prisma/client';

@Injectable()
export class CourseRepository {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CourseCreateInput): Promise<Course> {
    return this.prisma.course.create({ data });
  }

  findAll(params: { skip: number; take: number }): Promise<Course[]> {
    return this.prisma.course.findMany({
      skip: params.skip,
      take: params.take,
      orderBy: { id: 'desc' },
    });
  }

  findById(id: number): Promise<Course | null> {
    return this.prisma.course.findUnique({
      where: { id },
    });
  }

  update(id: number, data: Prisma.CourseUpdateInput): Promise<Course> {
    return this.prisma.course.update({
      where: { id },
      data,
    });
  }

  delete(id: number): Promise<Course> {
    return this.prisma.course.delete({
      where: { id },
    });
  }
}
