FROM node:18-alpine

RUN apk add --no-cache libssl3 openssl postgresql-client bash

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "start:dev"]