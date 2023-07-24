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

RUN apk add certbot

ADD ./init-letsencrypt.sh /

RUN /bin/sh -c "./init-letsencrypt.sh

ENTRYPOINT ["nginx", "-g", "daemon off;"]