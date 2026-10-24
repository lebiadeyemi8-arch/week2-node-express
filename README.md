# Week 2 Node.js & Express API

A simple Express API assignment with JSON parsing, input validation, error handling, environment-based port configuration, a static HTML page, and request-logging middleware.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
```

Create a `.env` file by copying `.env.example`, then run:

```bash
npm start
```

Open `http://localhost:3000` for the static HTML page.

## Endpoints

- `GET /` — serves the static HTML page.
- `GET /api` — responds with `My Week 2 API!`.
- `POST /user` — accepts `{ "name": "...", "email": "..." }`; responds with a greeting. Missing or invalid fields return HTTP 400.
- `GET /user/:id` — responds with `User [id] profile`.

## Test with curl

```bash
curl http://localhost:3000/api
```

```bash
curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d '{"name":"Adeyemi","email":"adeyemi@example.com"}'
```

```bash
curl http://localhost:3000/user/123
```

Missing-data test:

```bash
curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d '{"name":"Adeyemi"}'
```

## Deploy

This project can be deployed to a Node.js hosting provider such as Render:

1. Push this project to a GitHub repository named `week2-node-express`.
2. Create a new Web Service from that repository.
3. Set the build command to `npm install`.
4. Set the start command to `npm start`.
5. The host should provide a `PORT` environment variable automatically. Do not commit your real `.env` file.

After deployment, test `/`, `/api`, `/user`, and `/user/:id` using the deployed URL.
