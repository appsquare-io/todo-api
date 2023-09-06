import { Hono } from 'hono'

type Variables = { token: string }

export function createApp() {
  return new Hono<{ Variables: Variables }>()
}
