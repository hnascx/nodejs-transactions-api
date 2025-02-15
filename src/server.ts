import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/', async () => {
  const transactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transactions
})

// app.listen returns a promise so because of that we can use .then to run code after the server is running
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
