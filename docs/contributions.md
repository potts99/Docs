---
id: contributions
title: Contributing to the project
slug: /contributions
---

### This page is intended for use if you have any plans to potentially fix any bugs or add any features that you have thought of that we haven't.

Firstly, if you are planning to contribute to the project, thank you.

Secondly, in order to get started git clone or fork the main branch on <a href="https://github.com/Peppermint-Lab/Peppermint">github</a>. The necessary requirements for development are:
```
Node
MongoDB local server
Git
```
If you have all these you should have no issues in developing locally on your machine. 
Once you have everyone downloaded you need to copy the example.env folder inside config and fill in the enviroment variables needed to get started.

```
NODE_ENV=development
PORT=5000
MONGO_URI_DEV='' 
JWT_SECRET=''
```

After all this has been fill in you need to install the variables on both the server and client.

```
npm i
npm i -g mongo-seeding-cli
cd client 
npm i --legacy-peer-deps
```

Once the node modules are fully installed you can go back to the root of the project and run 
```
npm run dev
```

This will run the backend and front end will run together using the concurrently and will refresh on any changes made to the codebase.

### Docker 

When using docker to test your changes the see how things act in a production enviroment you need to create a build for the front end. Use the following to re-create this. 
```
cd client
npm run build
```
Move the build folder into the root of the project folder.

#### Docker-compose

Use the following docker-compose to create a local build of the codebase. After completing the client build above.

```
version: "3.1"

services:
  mongo:
    container_name: db
    image: mongo:4
    restart: always
    volumes:
      - ./docker-data/db:/data/db

  client:
    container_name: peppermint
    build: .
    ports:
      - 5000:5000
    restart: on-failure
    depends_on:
      - mongo
    environment:
      MONGO_URI_DOCKER: "mongodb://mongo:27017/peppermint"
      JWT_SECRET: "ZwfJtS3muY65CaeZ" # This is an example secret
      PORT: 5000

```

### Pull Requests

Once all this is completed and everything builds and works then create a pull request on our github repo 🙌
