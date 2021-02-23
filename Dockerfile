FROM hoosin/alpine-nginx-nodejs:latest
RUN yarn config set strict-ssl false --global
ARG profile=dev

WORKDIR /app
COPY package.json ./
COPY package-lock.json yarn.lock ./
ADD . /app
RUN yarn install
RUN yarn build

COPY /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
