import { Injectable } from '@nestjs/common';
import { EnrollmentRepository } from './enrollment.repository';
import { CreateEnrollmentInput } from './dto/create-enrollment.input';
import { UpdateEnrollmentInput } from './dto/update-enrollment.input';
import { EnrollmentPaginationInput } from './dto/enrollment-pagination.input';

@Injectable()
export class EnrollmentService {
  constructor(private readonly repo: EnrollmentRepository) {}

  create(data: CreateEnrollmentInput) {
    return this.repo.createWithRelations(data);
  }

  findAll(pagination: EnrollmentPaginationInput) {
    return this.repo.findAllWithRelations(pagination);
  }

  findOne(id: number) {
    return this.repo.findOneWithRelations(id);
  }

  update(data: UpdateEnrollmentInput) {
    return this.repo.updateWithRelations(data);
  }

  remove(id: number) {
    return this.repo.removeWithRelations(id);
  }
}
