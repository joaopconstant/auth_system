# Auth System

![Work In Progress](https://img.shields.io/badge/status-work%20in%20progress-orange)

A secure authentication system built with Node.js, Express, and MongoDB.

## Features

- User Registration & Login
- JWT Authentication
- Secure Password Hashing
- MongoDB Integration

## Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account or local installation
- pnpm

### Installation

1. Clone the repository
2. Install dependencies (backend):
   ```bash
   cd backend
   pnpm install
   ```

### Configuration

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=60
```

### API Endpoints

### Auth

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and receive JWT

### User

- `GET /user/me` - Get current user info (Protected)

## Project Structure

```text
auth_system/
├── backend/
│   ├── src/
│   │   ├── config/      # Configuration files (DB connection, etc.)
│   │   ├── controllers/ # Request handlers
│   │   ├── middlewares/ # Express middlewares (Auth, Errors)
│   │   ├── models/      # Mongoose models
│   │   ├── routes/       # Route definitions
│   │   ├── services/    # Business logic
│   │   ├── utils/       # Utility functions
│   │   ├── app.js       # Express app setup
│   │   └── server.js    # Server entry point
│   ├── .env             # Environment variables
│   └── package.json     # Project dependencies
└── README.md            # Project documentation
```

## Running the Application

```bash
cd backend
pnpm run dev
```
