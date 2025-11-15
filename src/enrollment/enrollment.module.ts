import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentResolver } from './enrollment.resolver';
import { EnrollmentRepository } from './enrollment.repository';

@Module({
  providers: [EnrollmentResolver, EnrollmentService, EnrollmentRepository],
})
export class EnrollmentModule {}
