# News Explorer Backend API

RESTful API for the News Explorer application built with Node.js, Express, and MongoDB.

## Features

- **User Authentication**: JWT-based authentication
- **Article Management**: CRUD operations for saved articles
- **Security**: Helmet, rate limiting, input validation, NoSQL injection protection
- **Error Handling**: Centralized error handling with detailed messages
- **Validation**: Input validation using express-validator

## Technology Stack

- **Node.js** & **Express.js** - Server framework
- **MongoDB** & **Mongoose** - Database and ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **helmet** - Security headers
- **express-rate-limit** - API rate limiting
- **express-mongo-sanitize** - NoSQL injection prevention

## Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**

   - Copy `.env.example` to `.env`
   - Update the values in `.env`

   ```bash
   cp .env.example .env
   ```

3. **Start MongoDB**

   - Make sure MongoDB is running locally or have a MongoDB Atlas URI

4. **Run the server**

   ```bash
   # Development mode with auto-reload
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Authentication

#### Register User

```http
POST /users/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123",
  "name": "John Doe"
}
```

**Validation Rules:**

- Email: Must be valid email format
- Password: Min 6 characters, must contain uppercase, lowercase, and number
- Name: 2-30 characters, letters and spaces only

**Response:** `201 Created`

```json
{
  "_id": "65f7368dfb74bd6a92114c85",
  "email": "user@example.com",
  "name": "John Doe"
}
```

#### Login User

```http
POST /users/signin
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123"
}
```

**Response:** `200 OK`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "65f7368dfb74bd6a92114c85",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

#### Get Current User

```http
GET /users/me
Authorization: Bearer <token>
```

**Response:** `200 OK`

```json
{
  "_id": "65f7368dfb74bd6a92114c85",
  "email": "user@example.com",
  "name": "John Doe"
}
```

### Articles

All article endpoints require authentication via Bearer token.

#### Get All Saved Articles

```http
GET /articles
Authorization: Bearer <token>
```

**Response:** `200 OK`

```json
[
  {
    "_id": "65f7371e7bce9e7d331b11a0",
    "keyword": "Technology",
    "title": "Article Title",
    "text": "Article description",
    "date": "2025-11-10T12:00:00Z",
    "source": "TechNews",
    "link": "https://example.com/article",
    "image": "https://example.com/image.jpg",
    "owner": "65f7368dfb74bd6a92114c85",
    "createdAt": "2025-11-10T12:00:00Z",
    "updatedAt": "2025-11-10T12:00:00Z"
  }
]
```

#### Save Article

```http
POST /articles
Authorization: Bearer <token>
Content-Type: application/json

{
  "keyword": "Technology",
  "title": "Article Title",
  "text": "Article description",
  "date": "2025-11-10T12:00:00Z",
  "source": "TechNews",
  "link": "https://example.com/article",
  "image": "https://example.com/image.jpg"
}
```

**Validation Rules:**

- keyword: Required, max 50 characters
- title: Required, max 200 characters
- text: Required, max 1000 characters
- date: Required
- source: Required, max 100 characters
- link: Required, must be valid URL
- image: Required, must be valid URL

**Response:** `201 Created`

```json
{
  "_id": "65f7371e7bce9e7d331b11a0",
  "keyword": "Technology",
  "title": "Article Title",
  "text": "Article description",
  "date": "2025-11-10T12:00:00Z",
  "source": "TechNews",
  "link": "https://example.com/article",
  "image": "https://example.com/image.jpg",
  "owner": "65f7368dfb74bd6a92114c85",
  "createdAt": "2025-11-10T12:00:00Z",
  "updatedAt": "2025-11-10T12:00:00Z"
}
```

#### Delete Article

```http
DELETE /articles/:articleId
Authorization: Bearer <token>
```

**Response:** `200 OK`

```json
{
  "message": "Article deleted successfully"
}
```

## Error Responses

### Validation Error

```json
{
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

### Authentication Error

```json
{
  "message": "Authorization required"
}
```

### Rate Limit Error

```json
{
  "message": "Too many requests from this IP, please try again later."
}
```

## Security Features

### Rate Limiting

- **Login**: 5 attempts per 15 minutes
- **Signup**: 3 attempts per hour
- **General API**: 100 requests per 15 minutes per IP

### Input Validation

- All user inputs are validated and sanitized
- NoSQL injection protection
- XSS protection via helmet

### Password Security

- Passwords are hashed using bcryptjs with salt rounds
- Minimum password requirements enforced

### JWT Security

- Tokens expire after 7 days
- Stored securely (not in code)

## Development

```bash
# Run in development mode with auto-reload
npm run dev

# Run linting
npm run lint
```

## Environment Variables

See `.env.example` for all required environment variables.

## Project Structure

```
backend/
├── controllers/         # Request handlers
│   ├── articleController.js
│   └── userController.js
├── middleware/          # Custom middleware
│   ├── auth.js
│   ├── errorHandler.js
│   └── validation.js
├── models/             # Mongoose models
│   ├── article.js
│   └── users.js
├── routes/             # API routes
│   ├── articleRoutes.js
│   └── userRoutes.js
├── app.js              # Express app setup
├── server.js           # Server entry point
├── .env                # Environment variables (not in git)
├── .env.example        # Environment template
└── package.json        # Dependencies
```

## License

This project is part of a web development bootcamp final project.

## Author

Halil Aybar
