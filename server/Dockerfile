FROM node:18-alpine as base

WORKDIR /app
COPY package*.json ./
ARG API_PORT
ENV PORT=${API_PORT}
EXPOSE ${API_PORT}

FROM base as production
ENV NODE_ENV=production
COPY . .
RUN npm install prisma
RUN npm install @prisma/client
RUN npx prisma generate
RUN npm ci

FROM base as dev
ENV NODE_ENV=development
COPY . .
RUN npm install prisma
RUN npm install @prisma/client
RUN npx prisma generate
RUN npm ci
