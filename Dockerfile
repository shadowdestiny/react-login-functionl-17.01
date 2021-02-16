FROM node:15.8.0-alpine

#ARG profile=dev

#ENV ENVIRONMENT=$profile

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY yarn.lock ./

ADD . /app

RUN npm install --global yarn

RUN yarn install

# RUN npm i

# EXPOSE 8080

CMD  ["sh", "-c","yarn build:dev"]

