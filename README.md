# 🚀 Fullstack Developer Portfolio | Oksana

A professional fullstack portfolio application showcasing dynamic web development skills. The frontend is built with Next.js using Static Site Generation (SSG) for ultra-fast loading speeds and production performance.

🔗 **Live Demo:** [https://portfolioks.duckdns.org:8444](https://portfolioks.duckdns.org:8444)

---

## 🛠️ Tech Stack & Architecture

* **Frontend:** Next.js (React), TypeScript, Redux Toolkit, Tailwind CSS / PostCSS
* **Deployment Model:** Static Site Generation (SSG) via `output: 'export'`
* **Backend Experience:** Django (Python), Node.js, REST APIs, JWT Authentication
* **Database & Cloud:** Supabase (PostgreSQL), MongoDB
* **Advanced Features:** WebSockets, Canvas API, Google Maps Integration
* **DevOps & Hosting:** Docker, Docker Compose, Nginx (Alpine), SSL (Let's Encrypt), VPS Hosting (VPS.ua)

---

## 📁 Featured Projects

### 1. 🍸 VIPBoozer
An interactive booking platform utilizing **WebSockets** for real-time status updates and the **Canvas API** for visual table mapping.

### 2. 🚗 AutoRiaClone
A fully functional car marketplace clone featuring secure user moderation, **PrivatBank API** payment/service integration, and dynamic user chats.

---

## 💻 Local Development & Build Workflow

To add new content (like project videos), modify the code, and export the static build:

### 1. Run in Development Mode
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to preview your changes locally.

### 2. Generate Static Export (`/out` folder)
When you are ready to update the live website, compile the project into static files:
```bash
npm run build
```
This script triggers `next build`, optimizes assets, and generates the production-ready static site inside the `/out` directory.

---

## 🐳 Production Deployment

The generated static layout and configuration files are pushed to GitHub, pulled to the **VPS.ua server**, and served efficiently via Nginx using Docker Compose.

To apply updates on the live server:
```bash
git fetch --all
git reset --hard origin/master
docker compose down && docker compose up -d
```
