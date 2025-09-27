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

###  Clone the repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

###  Environment Variables
Create `.env` in backend folder:
DATABASE_URL=postgres://postgres:postgres@db:5432/prompts
JWT_SECRET=supersecretkey
```
Create `.env.development` in frontend folder:
NEXT_PUBLIC_BASE_URL=http://localhost:5000/api/

### Frontend (local mode)
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at: `http://localhost:3000`

### Backend (local mode)
```bash
cd backend
npm install
npm run dev
```
Backend runs at: `http://localhost:5000/api/prompts`

---

### Database Migrations (local mode)
Docker:
```bash
docker compose exec backend npx prisma migrate deploy
```

> migrate dev: For development environment (creates migration & applies to DB)  
> migrate deploy: For production environment (applies existing migration without altering schema)

---

### Full Project with Docker Compose
```bash
docker compose up --build
```
Frontend: `http://localhost:3000`  
Backend API: `http://localhost:5000/api/prompts`

---

## API Endpoints

**GET /api/prompts**  
Fetch all prompts — query params: `favorite=true`

**POST /api/prompts**  
Create new prompt — body:
```json
{
  "title": "My Prompt",
  "description": "Write about your first coding project."
}
```

**PUT /api/prompts/:id**  
Edit prompt details  

**DELETE /api/prompts/:id**  
Delete prompt  

**POST /api/prompts/:id/favorite**  
Toggle favorite status

---


## Deployment
```bash
docker-compose build


## 📖 Conclusion
Demonstrates:
- End-to-end prompt management tool
- Solid knowledge of Next.js, Tailwind CSS, Node.js, RESTful API
- Production-ready setup with Docker and CI/CD