import { createApp } from './utils/hono'
import { auth } from './middleware'
import { todos } from './routes/todos'

const app = createApp()
app.get('/', (c) => c.text('Hello!'))

app.use('/*', auth)
app.route('/todos', todos)

export default app
