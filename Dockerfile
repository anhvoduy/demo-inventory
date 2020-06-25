FROM alpine:3.12

ENV NODE_VERSION 12.18.1

ENV YARN_VERSION 1.22.4

# create app directory
WORKDIR /home/app

# copy current folder
COPY . .

# change working directory
WORKDIR /home/app/server

# npm install
RUN npm install

EXPOSE 8000
CMD [ "npm", "start" ]