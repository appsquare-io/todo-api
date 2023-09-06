// import { drizzle } from 'drizzle-orm/libsql'
// import { createClient } from '@libsql/client'

// const client = createClient({
//   url: 'libsql://romantic-destiny-louis-smit.turso.io',
//   authToken:
//     'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTM5OTY0NzksImlkIjoiZTcwZTcxZjEtNGNhMC0xMWVlLTgwZDUtMTJiNWY3OWJkNDUzIn0.HQdquK9YTGid7u0bhj9RBylIA7UkCcoQ1LvrnC1YFOOmorQ81HiZZZ4MzHv8N0OopZ2bf9QsWUM9jHr3zm-LAw',
// })

// export const db = drizzle(client)

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const client = postgres(String(process.env.DATABASE_URL))
export const db = drizzle(client)
