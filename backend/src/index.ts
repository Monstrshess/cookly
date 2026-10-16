import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'

const app = new Hono()

app.use(logger())
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/user/:id', (c) => {
  const id = c.req.param('id')
  return c.json({'user': id, 'message': 'Hello Hono!'})
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
