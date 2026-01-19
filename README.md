# Job Portal Backend

Backend API for a job portal application built with Node.js, TypeScript, and MongoDB.  
This project focuses on backend architecture, authentication, and scalable API design.

## Current Features

- User signup and login
- Password hashing using bcrypt
- JWT-based authentication
- HTTP-only cookie session handling
- Authentication middleware for protected routes
- Role-based user support (applicant / recruiter)
- MongoDB integration with Mongoose
- Environment-based configuration

## Tech Stack

- Node.js
- TypeScript
- Express
- MongoDB & Mongoose
- JWT (jsonwebtoken)
- bcrypt
- cookie-parser

## Authentication Flow

- Users register with email and password
- Passwords are securely hashed before storage
- On login, a JWT is generated and stored in an HTTP-only cookie
- Protected routes are secured using authentication middleware

## Project Structure

- `src/controller` – Request handlers
- `src/routes` – API routes
- `src/middleware` – Authentication middleware
- `src/model` – Database schemas
- `src/utils` – Helper utilities
- `src/config` – Database and environment config

## Status

🚧 In Progress  
Authentication module completed.  
More features will be added incrementally.

## How to Run Locally

1. Clone the repository
2. Install dependencies
3. Create a `.env` file with required variables
4. Run the development server

