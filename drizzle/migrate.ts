import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

async function main() {
  const client = postgres(String(process.env.DATABASE_URL))
  const db = drizzle(client)

  console.log('Running migrations')

  await migrate(db, { migrationsFolder: 'drizzle/migrations' })

  console.log('Migrated successfully')

  process.exit(0)
}

main().catch((e) => {
  console.error('Migration failed')
  console.error(e)
  process.exit(1)
})
