![1666805242487](image/README/1666805242487.png)

# About

This challenge deals with the development of a Back-end application in Node.js using Express, applying the principles of Object Oriented Programming (`OOP`) to build an API with `CRUD` to manage a car dealership. This will be done using the `MongoDB` database.

following `MSC` software architecture (Model - Service - Controller) and `REST` web architecture principles, connecting to a `MySQL` database for information persistence.

# ****Technologies Used****

![TypeScript](https://img.shields.io/badge/TypeScript-05122A?style=flat&logo)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;
![Node.js](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js)&nbsp;
![Express](https://img.shields.io/badge/-Express-05122A?style=flat&logo=express)&nbsp;
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)&nbsp;
![ESLint](https://img.shields.io/badge/-ESLint-05122A?style=flat&logo=eslint)&nbsp;
![Chai](https://img.shields.io/badge/-Chai-05122A?style=flat&logo=chai)&nbsp;
![Mocha](https://img.shields.io/badge/-Mocha-05122A?style=flat&logo=mocha)&nbsp;
![Sinon](https://img.shields.io/badge/-Sinon-05122A?style=flat&logo=sinon)&nbsp;
![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)&nbsp;
![GitHub](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)&nbsp;
![Markdown](https://img.shields.io/badge/-Markdown-05122A?style=flat&logo=markdown)&nbsp;
![Docker](https://img.shields.io/badge/-Docker-05122A?style=flat&logo=docker)&nbsp;
![Swagger](https://img.shields.io/badge/-Swagger-05122A?style=flat&logo=swagger)&nbsp;

# Decisions

* For the development of the application, I chose to use `Node.js` technologies, as it is an engine (engine) already based on `JavaScript`, widely supported and with non-blocking IO (using async methods for stacks), with `Express`, which is a mature framework and tested, which provides a number of useful abstractions for building HTTP APIs in ` Node.js.` This is because they are tools where I have solidified knowledge and domain, thus enabling an agile and safe development of the entire project;
* The software architecture chosen was the `MSC` (Model - Service - Controller) as already mentioned in the introduction, as it is a layered architecture model, which improves the organization and division of responsibilities in `Node.js` applications with `Express`;
* The database chosen for the persistence of information was `mongodb`, which is a document-oriented database and was designed to store a large scale of data, in addition to allowing you to work efficiently with large volumes. Its advantage is the permission to create multiple databases and multiple collections within the main one.
* For the tests, considering the application in `Node.js` with `Express`, I opted for the triad `Chai` (for assertions, providing ways to tell the code what I expect, test and validate the return), `Mocha` (as framework/base “describe / it ” tests for JS) and `Sinon` (which provides the functions for test doubles or test doubles, simulations of code interactions with dependencies external to it), since they are established tools and also where I present full knowledge and domain.
* As a tool to ensure code compliance, standardization and quality, I used `ESLint`.

# Tests

* The application had 100/100% of all its main functionalities tested, in all layers and always considering the success and error cases.

  ![1667058984706](image/README/1667058984706.png)

# Usage

  Caso não tenha o MongoDB instalado em sua máquina e deseje usar o Docker, é só seguir os passos a seguir:

1. Baixe a imagem do MongoDB:

```sh
  docker pull mongo
```

2. Crie o contêiner do MongoDB:

```sh
  docker run --name <nome-do-container> -p 27017:27017 -d mongo
```

3. Confira se o contêiner está rodando:

```sh
  docker ps
```

## Docker

> Rode os serviços `node` e `mongodb` com o comando `docker-compose up -d`.

- Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
- Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
- A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

> Use o comando `docker exec -it car_shop bash`.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

> Instale as dependências [**Caso existam**] com `npm install`

  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

> Instale as dependências [**Caso existam**] com `npm install`

  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  ✨ **Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

# Documentation

go to `http://localhost/3000/docs`

![1667081534004](image/README/1667081534004.png)
