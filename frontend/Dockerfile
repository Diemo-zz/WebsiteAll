FROM ubuntu:20.04 as build_stage

ARG DEBIAN_FRONTEND=noninteractive
RUN apt update -y; apt install -y nodejs npm

RUN mkdir /app
WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:latest
COPY --from=build_stage /app/build/ /usr/share/nginx/html

#COPY --from=build_stage /nginx.conf /etc/nginx/conf.d/default.conf
