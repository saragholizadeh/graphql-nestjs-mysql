import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentInput } from './dto/create-enrollment.input';
import { UpdateEnrollmentInput } from './dto/update-enrollment.input';
import { EnrollmentPaginationInput } from './dto/enrollment-pagination.input';
import { Enrollment } from './enrollment.model';

@Resolver(() => Enrollment)
export class EnrollmentResolver {
  constructor(private service: EnrollmentService) {}

  @Query(() => [Enrollment], { name: 'enrollments' })
  findAll(
    @Args('pagination', {
      type: () => EnrollmentPaginationInput,
      nullable: true,
    })
    pagination: EnrollmentPaginationInput = { page: 1, limit: 10 },
  ) {
    return this.service.findAll(pagination);
  }

  @Query(() => Enrollment, { name: 'enrollment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => Enrollment)
  createEnrollment(@Args('data') data: CreateEnrollmentInput) {
    return this.service.create(data);
  }

  @Mutation(() => Enrollment)
  updateEnrollment(@Args('data') data: UpdateEnrollmentInput) {
    return this.service.update(data);
  }

  @Mutation(() => Enrollment)
  removeEnrollment(@Args('id', { type: () => Int }) id: number) {
    return this.service.remove(id);
  }
}
