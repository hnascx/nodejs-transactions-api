import { app } from './app'
import { env } from './env'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running! 🚀')
  })

// app.listen returns a promise so because of that we can use .then to run code after the server is running
