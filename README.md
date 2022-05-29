# graphql-recipe-app-with-express-and-react

I'm create it to learn GraphQL and Apollo.

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

