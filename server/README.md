# server

I implemented it by referring to this document.

[How To Set Up a GraphQL Server in Node.js with Apollo Server and Sequelize](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-graphql-server-in-node-js-with-apollo-server-and-sequelize)

I'm building a combination of these libraries and environments.

- Node.js
- express
- Sequelize(ORM)
- MySQL(RDS)
- Apollo Server( `apollo-server-express` )

## Setup

If Docker is available, use Docker to build a MySQL environment.

Build the DB by looking at the contents of the env file.  
The contents of the env file contains connection information for testing purposes, so please modify it according to your environment when actually using it.

```sh
docker-compose up -d
```

Execute this command to create DB tables.

```sh
yarn db:migrate:dev
```

All that remains is to launch the application.
See `Usage` below.

## Usage

Start app

```bash
yarn dev
```

Code format

```bash
yarn fmt
```
