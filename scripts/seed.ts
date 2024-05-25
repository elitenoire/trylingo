import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'

import * as schema from '@/db/schema'

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema, logger: true })

const main = async () => {
  try {
    console.log('🚧 [DB]: Seeding database...')

    await db.delete(schema.courses)
    await db.delete(schema.userProgress)

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: 'Spanish',
        altCode: 'es',
      },
      {
        id: 2,
        title: 'Italian',
        altCode: 'it',
      },
      {
        id: 3,
        title: 'French',
        altCode: 'fr',
      },
      {
        id: 4,
        title: 'German',
        altCode: 'de',
      },
    ])

    console.log('✅ [DB]: Seeded 100%!')
  } catch (error) {
    console.error(error)
    throw new Error('❌ [DB]: Failed to seed database.')
  }
}

main()
