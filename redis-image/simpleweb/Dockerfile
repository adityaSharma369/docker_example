#use existing docker image as a base
FROM node:alpine
WORKDIR /usr/app
COPY ./ ./
#download and install the dependencies
RUN npm install
#Tell the image what to do and when to start
#as a container
CMD ["npm","start"]