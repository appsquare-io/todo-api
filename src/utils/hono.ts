import { Context, Hono } from 'hono'

export type Variables = { token: string }

export type AppContext = Context<{ Variables: Variables }>

export function createApp() {
  return new Hono<{ Variables: Variables }>()
}
