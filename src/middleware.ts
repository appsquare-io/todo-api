import { Context, Next } from 'hono'
import { HTTPException } from 'hono/http-exception'

export async function auth(c: Context, next: Next) {
  let authorization = c.req.header('Authorization')

  if (authorization) {
    let token = authorization.split(' ')[1]

    if (token) {
      c.set('token', token)

      await next()
    }
  } else {
    throw new HTTPException(401, { message: 'No token provided' })
  }
}
