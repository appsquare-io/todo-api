import { html } from 'hono/html'

import { createApp } from '~/utils/hono'

const app = createApp()

app.get('/', (c) =>
  c.html(
    html`<!DOCTYPE html>
      <code>
        <h4>README</h4>
        GET /api/todos
        <br />
        POST /api/todos
        <br />
        PUT /api/todos/:id
        <br />
        <br />
        type Todo = { id: number; completed?: boolean; title?: string; }
        <br />
        type InsertTodo = { completed?: boolean; title?: string; }
      </code>`
  )
)

export { app as home }
