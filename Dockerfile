FROM hoosin/alpine-nginx-nodejs:latest


WORKDIR /app

COPY package.json package-lock.json yarn.lock ./

ADD . /app

RUN yarn install && yarn build &&  rm -rf ./node_modules && cp -r /app/build/* /usr/share/nginx/html && rm -rf /usr/local/share/.cache/*

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
