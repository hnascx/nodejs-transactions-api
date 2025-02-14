import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Node.js application created'
})

// app.listen returns a promise so because of that we can use .then to run code after the server is running
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
