FROM node:16-alpine
MAINTAINER mingman <mingyuchoi514@gmail.com>
RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]
