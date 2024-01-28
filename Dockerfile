FROM node:16-alpine as builder

WORKDIR /app

COPY . .

RUN npm i pnpm -g

RUN pnpm i 

RUN pnpm run build