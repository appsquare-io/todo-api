import { Next } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { AppContext } from '~/utils/hono'

export async function auth(c: AppContext, next: Next) {
  let token = c.req.header('Authorization')?.split(' ')[1]

  if (!token) {
    throw new HTTPException(401, { message: 'No token provided' })
  }

  c.set('token', token)

  await next()
}
