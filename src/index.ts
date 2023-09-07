import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'

import { createApp } from './utils/hono'
import { auth } from './middleware'

import { home } from './routes/home'
import { todos } from './routes/todos'

const app = createApp()

app.use('*', cors())
app.use('*', logger())
app.use('*', prettyJSON())

app.route('/', home)
app.use('/todos/*', auth)
app.route('/todos', todos)

export default app
