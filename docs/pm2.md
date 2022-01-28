---
id: pm2
title:  Using Pm2
slug: /pm2
---

### Getting started with pm2

If you don't want to use docker you can always get started with pm2.

## Requirements

The things you need to get this up and working are

- Postgres installed
- NodeJS

## Pm2 install 

Install pm2 using the following command

```
yarn global add pm2

or 

npm install pm2@latest -g
```

## Peppermint install 

Then you need to clone the repo's main branch, then cd into the directory

```
git clone https://github.com/Peppermint-Lab/peppermint.git
cd peppermint
```

If you want to change any of the enviroment variables you can do
```
nano .env
```
This will give you options to add in your db details and PORT etc

Running the launch script will install the revelant modules & run pm2
```
yarn run pm2
```

By default peppermint will be available on port 3000 