FROM node:14 as build-deps
ARG profile=dev
ENV ENVIRONMENT=$profile
WORKDIR /app
COPY package.json ./
COPY package-lock.json yarn.lock ./
ADD . /app
RUN yarn install
CMD  ["sh", "-c","yarn build:${ENVIRONMENT}"]

FROM nginx:1.19.7-alpine
COPY --from=build-deps /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]