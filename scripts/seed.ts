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
    await db.delete(schema.units)
    await db.delete(schema.challenges)
    await db.delete(schema.challengeOptions)
    await db.delete(schema.challengeProgress)
    await db.delete(schema.lessons)

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

    await db.insert(schema.units).values([
      {
        id: 1,
        title: 'Unit 1',
        description: 'Basics of Spanish.',
        courseId: 1, // Spanish
        order: 1,
      },
    ])

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Spanish
        order: 1,
        title: 'Nouns',
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: 'Pronouns',
      },
      {
        id: 3,
        unitId: 1, // Spanish
        order: 3,
        title: 'Verbs',
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: 'Adjectives',
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: 'Grammar',
      },

      {
        id: 6,
        unitId: 1, // Spanish
        order: 6,
        title: 'Verbs',
      },
      {
        id: 7,
        unitId: 1,
        order: 7,
        title: 'Adjectives',
      },
      {
        id: 8,
        unitId: 1,
        order: 8,
        title: 'Grammar',
      },
    ])

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: 'SELECT',
        order: 1,
        question: 'Which one of these is "the man"?',
      },
    ])

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        option: 'el hombre',
        correct: true,
        imageSrc: '/man.svg',
        audioSrc: '/es_man.mp3',
      },
      {
        id: 2,
        challengeId: 1,
        option: 'la mujer',
        correct: false,
        imageSrc: '/woman.svg',
        audioSrc: '/es_woman.mp3',
      },
      {
        id: 3,
        challengeId: 1,
        option: 'el robot',
        correct: false,
        imageSrc: '/robot.svg',
        audioSrc: '/es_robot.mp3',
      },
    ])

    console.log('✅ [DB]: Seeded 100%!')
  } catch (error) {
    console.error(error)
    throw new Error('❌ [DB]: Failed to seed database.')
  }
}

main()
