import { pgTable, serial, text, integer, boolean } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

import { challenges } from '@/db/schema/challenges'

export const challengeProgress = pgTable('challenge_progress', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  challengeId: integer('challenge_id')
    .references(() => challenges.id, { onDelete: 'cascade' })
    .notNull(),
  completed: boolean('completed').notNull().default(false),
})

export const challengeProgressRelations = relations(challengeProgress, ({ one }) => ({
  challenge: one(challenges, {
    fields: [challengeProgress.challengeId],
    references: [challenges.id],
  }),
}))

export type ChallengeProgressType = typeof challengeProgress.$inferSelect
