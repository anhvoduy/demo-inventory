# react-app-inventory
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# sample template:
https://github.com/creativetimofficial/light-bootstrap-dashboard-react

# run docker:
docker build -t admin/node-demo-inventory .

docker run -p 8080:8080 -d admin/node-demo-inventory --name demo_inventory

curl -i localhost:8080

docker stop [containerid]

docker rm [containerid]

docker rmi [imageid]