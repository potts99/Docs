---
id: gettingStarted
title: Getting Started
slug: /
---

### Welcome to Peppermint 🍵
We are an Open Source Ticket Management System hoping to improve the user experience for people in teams or using similar software on their own. Our aim is to create software which is easy to use but still offers all the feature rich components paid solutions have.   

Currently the only deployment we currently offer is through a docker image with an official docker compose for easier use, the following docker-compose below can be used to get the up to date production build of Peppermint.


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

