### inventory web application
- reactjs
- nodejs
- sqlserver
- express

### run docker:

# build image
docker build -t admin/node-demo-inventory .

# attach to container
docker run -p 8082:8080 -d admin/node-demo-inventory

# print app output
docker logs [containerid]

# Enter the container
docker exec -it <container id> /bin/bash

# get data
curl -i localhost:8080

docker stop [containerid]

docker rm [containerid]

docker rmi [imageid]

# for remove all docker images <none>:
docker system prune