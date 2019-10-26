FROM node:latest
RUN mkdir -p /usr/src/app
RUN npm install
EXPOSE 3300
COPY package.json /usr/src/app
CMD [ “npm”, “start” ]