# 🧩 Node.js Express Boilerplate

A modern, production-ready **Express.js boilerplate** built with ES Modules, centralized error handling, and structured modules.  
Perfect for quickly bootstrapping new APIs or backend services.

---

## 🚀 Features

- ⚙️ **Express.js** setup with modular routing (`/modules`)
- 📦 **ESM imports** (`import/export` syntax)
- 🌿 **dotenv** for environment variables
- 🪵 **Winston logger** with timestamps & colorized output
- 🔐 **API key and domain authentication middleware**
- 🧱 Centralized **error handler** (`errorHandler.js`)
- 🔄 Ready for **Prisma ORM** or any database
- 🧩 Organized folder structure for scalability
- 🧰 CORS, morgan, and other essential middlewares

## 📂 Project Structure

src/
├── app.js # Express setup and global middleware
├── server.js # Starts the app
│
├── config/
│ ├── config.js # Environment configuration
│ ├── cors.js # CORS setup
│ └── prisma.js # (optional) Prisma client
│
├── middleware/
│ ├── authenticateApiKey.js
│ ├── authenticateRequest.js
│ ├── errorHandler.js
│ └── notFoundHandler.js
│
├── modules/
│ ├── example1/
│ │ ├── example1.routes.js
│ │ ├── example1.controller.js
│ │ └── example1.service.js
│ └── example2/
│ ├── example2.routes.js
│ ├── example2.controller.js
│ └── example2.service.js
│
├── routes/
│ └── index.js # Central route registry
│
└── utils/
└── logger.js # Winston logger configuration

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nodejs-boilerplate.git
cd nodejs-boilerplate

# Install dependencies
npm install
```
