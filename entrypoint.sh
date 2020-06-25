#!/bin/sh

# this file for MACOS and LINUX
# NODE_SOCKET_NS to define namespace for each environemt and each clients

#1, Build Logs and costing
#npm i forever -g

# 2.Start node
cd ..
# Update and Private dependence libs if have someone
#nodemon server.js
#forever -w --watchDirectory /usr/src/app start server.js
#forever --fifo logs 0 to track realtime
NODE_ENV=local NODE_SOCKET_NS=local /root/.nvm/versions/node/v12.15.0/bin/node server.js