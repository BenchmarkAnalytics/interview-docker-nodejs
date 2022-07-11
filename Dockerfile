FROM node:14-alpine

COPY . /home/app
WORKDIR /home/app

EXPOSE 3000

RUN ["npm", "install"]

CMD ["node", "app.js"]