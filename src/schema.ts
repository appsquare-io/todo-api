import { pgTable, boolean, text, serial } from 'drizzle-orm/pg-core'
import { z } from 'zod'

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  completed: boolean('completed').default(false),
  title: text('title'),
  token: text('token'),
})

export type Todo = typeof todos.$inferSelect
export type InsertTodo = typeof todos.$inferInsert

export const CreateTodoSchema = z.object({
  title: z.string(),
  completed: z.boolean().optional().default(false),
})

export const UpdateTodoSchema = CreateTodoSchema.extend({
  id: z.number().optional(),
}).partial()
