# Thumbnail API

### Code challenge
The idea of this code challenge is to build an API that generates thumbnails with diferent sizes from a provided image.

### Implemented solution
I have used Docker and Docker-Compose to run the API in Node.js. I have implemented express for http server, multer for image upload and sharp to resize them, these are the main libraries.

- It has only one endpoint (/photos) that only accepts POST method.
- It receives the imagen from a multipart/form-data request.
- After that, generates the required thumbnails (different sizes for each one).
- The response contains an array with the files' filename.

### Setting up and running the project

First of all, you have to define the .env and .env_file (Docker purposes) on root directory. They have to have the next variables:

```
  API_PORT=DESIRED_PORT
```

To run this project you have to have installed [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/). Then in a terminal, located on the root directory enter the following command and wait a few seconds:

```
  docker-compose -f docker/docker-compose-dev.yml up
```

NOTE: the first time it will build the docker imagen and it would take a few minutes.

### Documentation
Once you have the API running you will be able to see the documentation on the resource /api/v1/docs. For instance if you are running it on port 45000, you will find the documentation on http://localhost:45000/api/v1/docs

### Authentication
In order to test auth implementation (Auth0), you need to define the next enviroinment variables in .env_dev file
```
  AUTH_JWKS_URI=
  AUTH_AUDIENCE=
  AUTH_ISUER=
```
After this you need to obtain a token to test private route.
Once you have the token, you only need to add it on 'Authorization' header, with the key 'Bearer {{token}}'. The endpoint GET /api/v1/private is used to test Auth0 implementation, and you will receive and 401 status code if you won´t send the header previously described.

NOTE: After add new env variables, you must reload docker-compose activity.

### Test
To run unit tests you have to go to /api, and then run:
```
npm install
npm run test
```
If you want to run performance test (over /api/v1/photos endpoint), just run:
```
npm install
npm run performance-test
```