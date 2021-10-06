FROM node:14.11.0-alpine
COPY . /vault
WORKDIR /vault
RUN npm install
RUN npm i -g ts-node
RUN npm i node-vault
CMD npm run prod