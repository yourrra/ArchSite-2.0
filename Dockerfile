FROM node:18-alpine as builder

WORKDIR /data

COPY . .

RUN npm i pnpm -g

RUN pnpm i 

RUN pnpm run build

COPY dist /usr/share/nginx/html