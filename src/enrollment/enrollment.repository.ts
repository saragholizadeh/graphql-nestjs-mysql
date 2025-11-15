import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BaseRepository } from 'common/base.repository';
import { Enrollment } from '@prisma/client';
import { CreateEnrollmentInput } from './dto/create-enrollment.input';
import { UpdateEnrollmentInput } from './dto/update-enrollment.input';
import { EnrollmentPaginationInput } from './dto/enrollment-pagination.input';

@Injectable()
export class EnrollmentRepository extends BaseRepository<
  Enrollment,
  CreateEnrollmentInput,
  UpdateEnrollmentInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, prisma.enrollment);
  }

  findAllWithRelations(pagination: EnrollmentPaginationInput) {
    const { page, limit } = pagination;
    return this.findAll(
      { skip: (page - 1) * limit, take: limit, orderBy: { id: 'desc' } },
      { user: true, course: true },
    );
  }

  findOneWithRelations(id: number) {
    return this.findOne(id, { user: true, course: true });
  }

  createWithRelations(data: CreateEnrollmentInput) {
    return this.create(data, { user: true, course: true });
  }

  updateWithRelations(data: UpdateEnrollmentInput) {
    const { id, ...rest } = data;
    return this.update(id, rest, { user: true, course: true });
  }

  removeWithRelations(id: number) {
    return this.remove(id, { user: true, course: true });
  }
}
