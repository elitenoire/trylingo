import { pgTable, serial, text, integer, pgEnum, boolean } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

import { lessons } from '@/db/schema/lessons'
import { challengeProgress } from '@/db/schema/challengeProgress'

export const challengesEnum = pgEnum('type', ['SELECT', 'HINT'])

export const challenges = pgTable('challenges', {
  id: serial('id').primaryKey(),
  type: challengesEnum('type').notNull(),
  question: text('question').notNull(),
  lessonId: integer('lesson_id')
    .references(() => lessons.id, { onDelete: 'cascade' })
    .notNull(),
  order: integer('order').notNull(),
})

export const challengeOptions = pgTable('challenge_options', {
  id: serial('id').primaryKey(),
  challengeId: integer('challenge_id')
    .references(() => challenges.id, { onDelete: 'cascade' })
    .notNull(),
  option: text('option').notNull(),
  correct: boolean('correct').notNull(),
  imageSrc: text('image_src'),
  audioSrc: text('audio_src'),
})

export const challengesRelations = relations(challenges, ({ many, one }) => ({
  lesson: one(lessons, {
    fields: [challenges.lessonId],
    references: [lessons.id],
  }),
  challengeOptions: many(challengeOptions),
  challengeProgress: many(challengeProgress),
}))

export const challengeOptionsRelations = relations(challengeOptions, ({ one }) => ({
  challenge: one(challenges, {
    fields: [challengeOptions.challengeId],
    references: [challenges.id],
  }),
}))

export type ChallengeType = typeof challenges.$inferSelect
export type ChallengeOptionType = typeof challengeOptions.$inferSelect
