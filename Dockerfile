FROM node:18.0.0-alpine AS build

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY ./ /app/

RUN yarn build:prod

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
