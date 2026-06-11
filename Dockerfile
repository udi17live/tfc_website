FROM node:20-alpine

RUN apk add --no-cache netcat-openbsd

WORKDIR /server

# Copy lockfiles and package.json files first for layer caching
COPY package.json package-lock.json turbo.json .npmrc ./
COPY apps/backend/package.json ./apps/backend/
COPY apps/storefront/package.json ./apps/storefront/

RUN npm install --legacy-peer-deps

# Copy full source
COPY . .

EXPOSE 9000 5173 8000
