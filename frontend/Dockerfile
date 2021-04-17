FROM ubuntu:20.04 as setup_app

ARG DEBIAN_FRONTEND=noninteractive
RUN apt update -y; apt install -y nodejs npm

RUN mkdir /app
WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY src /app/src
COPY public /app/public

FROM setup_app as buil_app
RUN npm run build

FROM nginx:latest
COPY --from=build_app /app/build/ /usr/share/nginx/html
