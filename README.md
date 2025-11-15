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

src/
 ├─ common/                   <-- Generic reusable code
 │   └─ base.repository.ts    <-- Generic Repository
 ├─ prisma/
 │   └─ prisma.service.ts     <-- Prisma client wrapper
 ├─ user/
 │   ├─ dto/
 │   ├─ user.model.ts/
 │   ├─ user.repository.ts
 │   ├─ user.service.ts
 │   └─ user.resolver.ts
 ├─ course/
 │   ├─ dto/
 │   ├─ course.model.ts/
 │   ├─ course.repository.ts
 │   ├─ course.service.ts
 │   └─ course.resolver.ts
 ├─ enrollment/
 │   ├─ dto/
 │   ├─ enrollment.model.ts/
 │   ├─ enrollment.repository.ts
 │   ├─ enrollment.service.ts
 │   └─ enrollment.resolver.ts
 └─ app.module.ts


-- 🔹 Example GraphQL Queries / Mutations

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