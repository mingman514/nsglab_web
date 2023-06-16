FROM node:16-alpine
MAINTAINER mingman <mingyuchoi514@gmail.com>
RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN npm install -g npm@9.6.6
RUN npm install --legacy-peer-deps
EXPOSE 3000
CMD [ "npm", "start" ]
