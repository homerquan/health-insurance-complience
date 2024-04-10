#!/bin/bash

cd frontend

npm run dev

# Navigate to the backend directory
cd ..

cd backend

# Start Docker Compose services in detached mode
docker compose up -d