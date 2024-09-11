FROM node:21.7.1-alpine3.19

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN npm install

COPY . /app

CMD ["npm", "run", "dev"]