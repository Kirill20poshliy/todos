FROM node:alpine

WORKDIR /usr/app/server

EXPOSE 8080

COPY ./ /usr/app/server

RUN npm install

# RUN npm run sync

CMD ["npm", "start"]