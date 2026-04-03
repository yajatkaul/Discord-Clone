# 💬 Discord Clone

A full-stack real-time chat application inspired by Discord, built using modern web technologies like Next.js, TypeScript, Socket.io, and Prisma.

This project replicates core Discord functionalities including servers, channels, messaging, and authentication—while focusing on scalability, performance, and clean architecture.

---

## 🚀 Features

* 💬 Real-time messaging using WebSockets (Socket.io)
* 🏠 Server & channel-based communication
* 🔐 Authentication with Clerk
* 📁 File uploads using UploadThing
* 📡 Voice & video support via LiveKit
* 🧠 Database management with Prisma + PostgreSQL (Supabase)
* 🎨 Modern UI with Tailwind CSS
* ⚡ Built with Next.js App Router

---

## 🧠 Tech Stack

* **Frontend:** Next.js, React, TypeScript
* **Backend:** Next.js API routes / server actions
* **Database:** PostgreSQL (Supabase) + Prisma ORM
* **Real-time:** Socket.io
* **Auth:** Clerk
* **Media:** LiveKit (voice/video)
* **Uploads:** UploadThing
* **Styling:** Tailwind CSS

---

## 🏗️ Architecture

```bash
Client (Next.js App)
        ↓ WebSocket / HTTP
Server (API Routes / Socket Server)
        ↓
Database (PostgreSQL via Prisma)
```

---

## 📦 Core Functionality

* Create and manage servers
* Create channels (text / voice)
* Send and receive real-time messages
* User authentication and sessions
* Media/file sharing
* Scalable backend structure

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yajatkaul/Discord-Clone.git
cd Discord-Clone
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add the following:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=key
CLERK_SECRET_KEY=key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Prisma Configuration
# Environment variables declared in this file are automatically made available to Prisma.
# Docs: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Supported databases: PostgreSQL, MySQL, SQLite, SQL Server, MongoDB, CockroachDB
# Docs: https://pris.ly/d/connection-strings

DATABASE_URL=url  # (Supabase is free)
DIRECT_URL=url    # (Supabase is free)

UPLOADTHING_SECRET=key
UPLOADTHING_APP_ID=key

# NEXT_PUBLIC_SITE_URL= (set this when deploying)

LIVEKIT_API_KEY=key
LIVEKIT_API_SECRET=key
NEXT_PUBLIC_LIVEKIT_URL=url
```

---

### 4. Setup Database

```bash
npx prisma generate
npx prisma db push
```

---

### 5. Run the App

```bash
npm run dev
```

---

## 📁 Project Structure

```bash
Discord-Clone/
├── src/            # Application source code
├── prisma/         # Database schema
├── public/         # Static assets
├── components/     # UI components
├── app/            # Next.js app router
└── README.md
```

---

## ⚡ Highlights

* Real-time communication architecture
* Scalable full-stack design
* Clean and maintainable codebase
* Modern developer tooling

---

## ⚠️ Limitations

* Requires proper environment setup
* Real-time features depend on WebSocket stability
* External services required (Clerk, LiveKit, UploadThing)

---

## 🔮 Future Improvements

* 🧵 Threaded conversations
* 🔔 Notifications system
* 📱 Mobile optimization
* 🌐 Deployment guide
* 🛡️ Role-based permissions

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Submit a pull request

---

## 📜 License

MIT License

---

## 💡 Inspiration

Built to explore real-time systems and modern full-stack architecture.
