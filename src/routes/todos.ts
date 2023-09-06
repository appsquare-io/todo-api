import { HTTPException } from 'hono/http-exception'
import { zValidator } from '@hono/zod-validator'

import { createApp } from '~/utils/hono'
import { getTodos, createTodo, updateTodo } from '~/todos'
import { CreateTodoSchema, UpdateTodoSchema } from '~/schema'

const app = createApp()

app.get('/', async (c) => {
  const todos = await getTodos(c.get('token'))
  return c.json({ todos })
})

app.post('/', zValidator('json', CreateTodoSchema), async (c) => {
  const data = await c.req.valid('json')

  const todo = await createTodo(data, c.get('token'))
  return c.json({ todo })
})

app.put('/:id', zValidator('json', UpdateTodoSchema), async (c) => {
  const data = await c.req.valid('json')
  const id = parseInt(c.req.param().id)

  const todos = await updateTodo(id, data, c.get('token'))

  if (todos.length === 1) {
    return c.json({ todo: todos[0] })
  }

  throw new HTTPException(404, { message: 'Todo not found' })
})

export { app as todos }
