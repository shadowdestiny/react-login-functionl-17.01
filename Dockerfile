FROM node:14 as build-deps
RUN yarn config set strict-ssl false --global
ARG profile=dev
ENV ENVIRONMENT=$profile
WORKDIR /app
COPY package.json ./
COPY package-lock.json yarn.lock ./
ADD . /app
RUN yarn install
RUN yarn build:$ENVIRONMENT

FROM nginx:1.19.7-alpine
COPY --from=build-deps /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
