FROM node:16-alpine as builder

WORKDIR /app

COPY . .

RUN npm i pnpm -g

RUN pnpm i 

RUN pnpm run build


FROM nginx:alpine

#!/bin/sh

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY /etc/letsencrypt/live/alextecture.com/fullchain.pem /home/nginx/fullchain.pem
COPY /etc/letsencrypt/live/alextecture.com/privkey.pem /home/nginx/privkey.pem

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /app/dist /usr/share/nginx/html


ENTRYPOINT ["nginx", "-g", "daemon off;"]