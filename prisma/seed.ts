import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const users: ReturnType<typeof prisma.user.create>[] = [];
  for (let i = 0; i < 150; i++) {
    users.push(
      prisma.user.create({
        data: { email: faker.internet.email(), name: faker.person.fullName() },
      }),
    );
  }
  const createdUsers = await Promise.all(users);
  console.log('✔️ Users created:', createdUsers.length);

  const courses: ReturnType<typeof prisma.course.create>[] = [];
  for (let i = 0; i < 100; i++) {
    courses.push(
      prisma.course.create({
        data: {
          title: faker.book.title(),
          description: faker.lorem.sentence(),
        },
      }),
    );
  }
  const createdCourses = await Promise.all(courses);
  console.log('✔️ Courses created:', createdCourses.length);

  const enrollments: ReturnType<typeof prisma.enrollment.create>[] = [];
  const usedPairs = new Set<string>();

  while (enrollments.length < 250) {
    const user = faker.helpers.arrayElement(createdUsers);
    const course = faker.helpers.arrayElement(createdCourses);

    const key = `${user.id}-${course.id}`;
    if (!usedPairs.has(key)) {
      usedPairs.add(key);
      enrollments.push(
        prisma.enrollment.create({
          data: {
            userId: user.id,
            courseId: course.id,
          },
        }),
      );
    }
  }

  const createdEnrollments = await Promise.all(enrollments);
  console.log('✔️ Enrollments created:', createdEnrollments.length);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
