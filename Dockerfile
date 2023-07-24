FROM node:16-alpine as builder

WORKDIR /app

COPY . .

RUN npm i pnpm -g

RUN pnpm i 

RUN pnpm run build


FROM nginx:alpine

#!/bin/sh

COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /app/dist /usr/share/nginx/html

RUN apk add wget

RUN wget -O -  https://get.acme.sh | sh -s email=my@example.com

RUN acme.sh --issue -d alextecture.com -d www.alextecture.com --key-file /path/to/keyfile/in/nginx/key.pem --fullchain-file /path/to/fullchain/nginx/cert.pem --reloadcmd "service nginx force-reload"

ENTRYPOINT ["nginx", "-g", "daemon off;"]