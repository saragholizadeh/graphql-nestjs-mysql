## NestJS GraphQL Prisma Boilerplate

**A clean example project for building applications with NestJS, GraphQL, and Prisma.
This project includes:**

- Generic Repository pattern to reduce code duplication

- Service layer for business logic

- Resolver layer for GraphQL

- Pagination, relation includes, and CRUD operations ready

- Modules for User, Course, and Enrollment

<hr>

📦 Tech Stack

NestJS/TypeScript
GraphQL
MySQL/Prisma

- ⚡ Installation
 
```bash 
git clone https://github.com/username/project.git
cd project
npm install
```

- Environment Variables
Create a .env file and set:

```bash 
DATABASE_URL="mysql://user:password@localhost:3306/dbname"
```

- Database Migration

```bash
npx prisma migrate dev --name init
npx prisma generate
```

- 🚀 Running the Project

```bash
npm run start:dev
```

- 📚 Project Structure

```bash

├── common
│   └── base.repository.ts
├── package.json
├── package-lock.json
├── prisma
│   ├── migrations
│   ├── prisma.module.ts
│   ├── prisma.service.ts
│   ├── schema.prisma
│   └── seed.ts
├── prisma.config.ts
├── schema.gql
├── src
│   ├── app.module.ts
│   ├── app.resolver.ts
│   ├── app.service.ts
│   ├── course
│   │   ├── course.model.ts
│   │   ├── course.module.ts
│   │   ├── course.repository.ts
│   │   ├── course.resolver.ts
│   │   ├── course.service.ts
│   │   └── dto
│   │       ├── course-pagination.input.ts
│   │       ├── create-course.input.ts
│   │       └── update-course.input.ts
│   ├── enrollment
│   │   ├── dto
│   │   │   ├── create-enrollment.input.ts
│   │   │   ├── enrollment-pagination.input.ts
│   │   │   └── update-enrollment.input.ts
│   │   ├── enrollment.model.ts
│   │   ├── enrollment.module.ts
│   │   ├── enrollment.repository.ts
│   │   ├── enrollment.resolver.ts
│   │   └── enrollment.service.ts
│   ├── main.ts
│   └── user
│       ├── dto
│       │   ├── create-user.input.ts
│       │   ├── update-user.input.ts
│       │   └── user-pagination.input.ts
│       ├── user.model.ts
│       ├── user.module.ts
│       ├── user.repository.ts
│       ├── user.resolver.ts
│       └── user.service.ts
├── tsconfig.build.json
└── tsconfig.json


```

-🔹 Example GraphQL Queries / Mutations

- Users

```bash 
query {
  users(pagination: { page: 1, limit: 10 }) {
    id
    name
    email
  }
}

mutation {
  createUser(data: { name: "John Doe", email: "john@example.com" }) {
    id
    name
    email
  }
}

```

- Courses

```bash
query {
  courses(pagination: { page: 1, limit: 10 }) {
    id
    title
    description
  }
}

mutation {
  createCourse(data: { title: "GraphQL 101", description: "Intro course" }) {
    id
    title
  }
}
```

- Enrollments

```bash
query {
  enrollments(pagination: { page: 1, limit: 10 }) {
    id
    user {
      id
      name
    }
    course {
      id
      title
    }
  }
}

mutation {
  createEnrollment(data: { userId: 1, courseId: 2 }) {
    id
    user { name }
    course { title }
  }
}

```

✅ Features

Generic CRUD with BaseRepository

Pagination support for all modules

Relation includes (e.g., enrollments with user and course)

Fully type-safe with TypeScript

Ready for production and GitHub showcase
