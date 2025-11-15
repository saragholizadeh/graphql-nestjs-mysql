import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    PrismaModule,
    UserModule,
    CourseModule,
    EnrollmentModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
