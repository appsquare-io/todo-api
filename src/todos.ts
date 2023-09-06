import { and, eq } from 'drizzle-orm'
import { InsertTodo, todos } from '~/schema'
import { db } from '~/utils/db'

export async function getTodos(token: string) {
  return await db.select().from(todos).where(eq(todos.token, token))
}

export async function createTodo(todo: InsertTodo, token: string) {
  return db
    .insert(todos)
    .values({ ...todo, token })
    .returning()
}

export async function updateTodo(id: number, todo: InsertTodo, token: string) {
  return db
    .update(todos)
    .set({ ...todo, token })
    .where(and(eq(todos.id, id), eq(todos.token, token)))
    .returning()
}
