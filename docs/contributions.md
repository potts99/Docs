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
Postgres Server
```
If you have all these you should have no issues in developing locally on your machine. 
Once you have everyone downloaded you need to copy the example.env folder inside config and fill in the enviroment variables needed to get started.

```
NODE_ENV=development
PORT=5000
JWT_SECRET="12234"
DB_USERNAME='postgres'
DB_PASSWORD='1234'
DB_HOST="localhost"
DATABASE_URL = "postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:5432/peppermint?schema=public"
```

After all this has been fill in you need to install the variables on both the server and client.

```
npm i
cd client 
npm i --legacy-peer-deps
cd ..
npm run docker
```

Once the node modules are fully installed and the db is seeded you can go back to the root of the project and run 
```
npm run dev
```

This will run the backend and front end will run together using the concurrently and will refresh on any changes made to the codebase.

### Docker 

When using docker to test your changes the see how things act in a production enviroment you need to create a build for the front end. Use the following to re-create this. 
```
./build.sh
```

This will build a new client and move it to the root

#### Docker-compose

Use the following docker-compose to create a local build of the codebase. After completing the client build above.

```
version: "3.1"

services:
  postgres:
    container_name: postgres
    image: postgres:latest
    restart: always
    volumes:
      - ./docker-data/db:/data/db
    environment: 
      POSTGRES_USER: peppermint
      POSTGRES_PASSWORD: 1234
      POSTGRES_DB: peppermint

  client:
    container_name: peppermint
    image: pepperlabs/peppermint:latest
    ports:
      - 5000:5000
    restart: on-failure
    depends_on:
      - postgres
    environment:
      JWT_SECRET: 'ZwfJtS3muY65CaeZ' 
      PORT: 5000
      DB_USERNAME: peppermint
      DB_PASSWORD: 1234
      DB_HOST: 'postgres'

```

### Pull Requests

Once all this is completed and everything builds and works then create a pull request on our github repo 🙌
