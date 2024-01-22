FROM node:alpine

WORKDIR /usr/app/client

EXPOSE 3000

COPY ./ /usr/app/client

RUN npm install
# RUN npm run build

CMD ["npm", "start"]