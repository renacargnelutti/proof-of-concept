# Thumbnail API

### Code challenge
The idea of this code challenge is to build an API that generates thumbnails with diferent sizes from a provided image.

#### Implemented solution
I have used Docker and Docker-Compose to run the API in Node.js. I have implemented express for http server, multer for image upload and sharp to resize them, these are the main libraries.

- It has only one endpoint (/photos) that only accepts POST method.
- It receives the imagen from a multipart/form-data request.
- After that, generates the required thumbnails (different sizes for each one).
- The response contains an array with the files' filename.

#### Running project

To run this project you have to have installed docker and docker-compose. Then in a terminal, located on the root directory enter the following command and wait a few seconds:

```
  docker-compose -f docker/docker-compose-dev.yml up
```

NOTE: the first time it will build the docker imagen and it would take a few minutes.

#### Documentation
Once you have the API running you will be able to see the documentation on the resource /api/v1/docs. For instance if you are running it on port 45000, you will find the documentation on http://localhost:45000/api/v1/docs

#### Test
To run unit tests you have to go to /api, and then run:
```
npm install
npm run test
```