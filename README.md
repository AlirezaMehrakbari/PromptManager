# Prompt Management Application

A full-stack application designed to create, manage, and favorite writing prompts.  
Built with **Next.js**, **Tailwind CSS**, **Node.js (Express)**, and a **PostgreSQL** database.  
Containerized with **Docker Compose** and ready for CI/CD deployment.

---

## Features

### Frontend (Next.js + Tailwind CSS)
- Create new prompts with **title** and **description**.
- Edit, delete, and mark prompts as favorites.
- Responsive design with **Tailwind CSS** for smooth UX.
- Fast data loading via **RESTful API integration**.

### Backend (Node.js + Express)
- Fully **RESTful API** for CRUD operations on prompts.
- Input validation and proper error handling.
- `favorite` query parameters for filtering.
- Built-in sorting with `createdAt: desc` to keep newest prompts at the top.
- JWT-based authentication.

### Database
- **PostgreSQL** with **Prisma ORM** for type-safe queries and clean migration management.
- Unique constraints for user identification and data integrity.

### Containerization & CI/CD
- **Docker Compose** for running backend, frontend, and database in isolated containers.
- Ready for integration with **GitHub Actions** or other CI/CD tools.
- Environment variable separation (`.env`) for smooth development and production setup.

---

## Tech Stack & Justification

**Frontend:**
- **Next.js**: Optimized build performance, and excellent developer experience.
- **Tailwind CSS**: Enables rapid UI development with utility-first classes, responsive designs, and minimal CSS bundle size.
- **TypeScript**: Adds static typing for maintainable and bug-free code.

**Backend:**
- **Node.js + Express**: Lightweight, high-performance, and widely supported for RESTful API development.
- **Prisma ORM**: Modern type-safe ORM with great DX and clean schema definitions.
- **PostgreSQL**: Reliable relational database with strong support for complex queries and indexing.

**Containerization:**
- **Docker Compose**: Simplifies multi-service orchestration (frontend, backend, DB).
- Easy to deploy to production or local testing environments.

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/AlirezaMehrakbari/PromptManager
cd PromptManager
```

---

### 2. Environment Variables

#### Backend – `backend/.env`
```
DATABASE_URL=postgres://postgres:postgres@db:5432/prompts
JWT_SECRET=supersecretkey
```

#### Frontend – `frontend/.env`
```
NEXT_PUBLIC_BASE_URL=http://localhost:5000/api/
```

> **Note:** Any time you change `NEXT_PUBLIC_BASE_URL`, run:
```bash
docker compose down -v
docker compose up --build --force-recreate
```
to clear cache and apply changes.

---

### 3. Start all services with Docker Compose
```bash
docker compose up --build
```
**URLs:**
- Frontend → http://localhost:3000
- Backend API → http://localhost:5000/api/prompts

---

## Database Migrations
Run migrations manually after `up --build`:
```bash
docker compose exec backend npx prisma migrate deploy
```

Run development migrations (with schema changes):
```bash
docker compose exec backend npx prisma migrate dev
```

---

## Rebuild after DB reset or env changes
If database volume is removed or `.env` variables change:
```bash
docker compose down -v
docker compose up --build --force-recreate
```

Then run migrations:
```bash
docker compose exec backend npx prisma migrate deploy
```

---

## API Endpoints

**GET /api/prompts** → Get all prompts (optional `favorite=true`)  
**POST /api/prompts** → Create prompt  
**PUT /api/prompts/:id** → Edit prompt  
**DELETE /api/prompts/:id** → Delete prompt  
**POST /api/prompts/:id/favorite** → Toggle favorite

Example POST:
```json
{
  "title": "My Prompt",
  "description": "Write about your first coding project."
}
```

---

## Deployment
To build images for production:
```bash
docker compose build
```
Deploy them to your server with:
```bash
docker compose up -d
```

---

## Conclusion
- End-to-end prompt management tool
- Solid knowledge of Next.js, Tailwind CSS, Node.js, RESTful API
- Production-ready setup with Docker and CI/CD
