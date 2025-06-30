# Node.js Transactions API

API developed to manage transactions.

### Functional Requirements

Ability to create a new transaction.

Ability to get an account summary.

Ability to list all completed transactions.

Ability to view a single transaction.

### Business Rules

Transactions can be of type credit or debit.

Users can be identified across requests.

A user can only view transactions they have created.

The application was developed using Fastify as the framework, Knex.js as the query builder, SQLite as the database, Vitest for testing, and Zod for validating the data sent in requests.

### Installation
`npm i`

### Running
`npm run dev`
