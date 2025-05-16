FROM node:18-alpine

WORKDIR /data

COPY . .

RUN npm i pnpm -g

RUN pnpm i

RUN pnpm run build
