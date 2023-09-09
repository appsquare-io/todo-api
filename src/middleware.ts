import { Context, Next } from 'hono'
import { HTTPException } from 'hono/http-exception'

export async function auth(c: Context, next: Next) {
  let token = c.req.header('Authorization')?.split(' ')[1]

  if (!token) {
    throw new HTTPException(401, { message: 'No token provided' })
  }

  c.set('token', token)

  await next()
}
