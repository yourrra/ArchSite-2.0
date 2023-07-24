FROM node:16-alpine as builder

WORKDIR /app

COPY . .

RUN npm i pnpm -g

RUN pnpm i 

RUN pnpm run build


FROM nginx:alpine

#!/bin/sh

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY /root/.acme.sh/alextecture.com_ecc/alextecture.com.cer /home/nginx
COPY /root/.acme.sh/alextecture.com_ecc/alextecture.com.key /home/nginx
COPY /root/.acme.sh/alextecture.com_ecc/ca.cer /home/nginx
COPY /root/.acme.sh/alextecture.com_ecc/fullchain.cer /home/nginx

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /app/dist /usr/share/nginx/html


ENTRYPOINT ["nginx", "-g", "daemon off;"]