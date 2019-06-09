# HereSeoul api

This is HereSeoul api.

This service made by team "Maas for friends" for 2019 Seoul Maas hackathon.

## Getting Started

This is REST api made by node.js, express.js with es6.

So you have to get node.js environment, know  ex6 syntax.

### Prerequisites

Please install node.js and I recommend to use docker.

* Install node.js: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

* Install Docker Desktop for MAC: [https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/)

* Install Docker Desktop for Windows: [https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-windows/install/)

* Install compose: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Create development environment

First, clone this repository into your local environment. Run followed command in your terminal.

```bash
  git clone https://github.com/kyhsa93/hereseoul-api
```

Second, intall package that needed in this project.

If your node.js environment is successly downloaded, you can use node package manager.

Run followed command in your terminal.

```bash
  npm install
```

Finaly, develop environment is created.

You can start api with followed command.

```bash
  npm start
```

And if you modify code and save, you can see the process detect code changes and restart it self.

## Start with docker

If you can use docker cli, you can build docker image.

Run followed command in project directory.

```bash
  docker build -t hereseoul-api
  docker images # list up docker images
```

And than you can create and run docker container using builded image.

```bash
  docker run -d -p 5000:5000 hereseoul-api
  docker ps # list up runnig container
```

And now you can connect api through localhost:5000.

## Start with compose

Compose in this project is include nginx for proxy, api.

Run followed command in project directory.

```bash
  docker-compose up -d # build images, create and run containers in background
```

If you want apply your modified code into container, you can add build option.

```bash
  docker-compose up -d --build # if source code is changed, rebuild image, recreate and rerun container
```

After use compose, you have stop and remove containers.

```bash
  docker-compose down # stop and remove container in compose
```

## Configuration

All configuration of this project is written config.js that locations in project root path.

[https://github.com/kyhsa93/hereseoul-api/blob/master/config.js](https://github.com/kyhsa93/hereseoul-api/blob/master/config.js)

You can modify this file for change some config or add environment value when building docker image.

And if you use compose, you can add or modify config in .env file that located in project root or modify docker-compose.yml directly.

## Other scripts

```bash
  npm run lint # fix code automatically and print error and warn
  npm run trans # transpile and generate lib
  npm test # test api
```

## Documentation

Document about this project is made swagger.

Start this api without production environment, and connect localhost:5000/docs in your browser.

```bash
  npm start # if process is successfully started, you can see document in your browser.
```
