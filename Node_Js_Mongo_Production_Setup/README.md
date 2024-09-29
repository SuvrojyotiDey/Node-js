Docker Commands :-

docker build -t backend-app:dev -f docker/development/Dockerfile .
docker run --rm -it -v ${pwd}:/usr/src/backend-app -v /usr/src/backend-app/node_modules -p 3000:3000 backend-app:dev
