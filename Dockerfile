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

RUN /home/.acme.sh/acme.sh --issue -d alextecture.com -d www.alextecture.com --key-file /etc/letsencrypt/live/alextecture.com/privkey.pem --fullchain-file /etc/letsencrypt/live/alextecture.com/fullchain.pem --reloadcmd "service nginx force-reload"

ENTRYPOINT ["nginx", "-g", "daemon off;"]