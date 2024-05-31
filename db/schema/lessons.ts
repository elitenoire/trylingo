import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

import { units } from '@/db/schema/units'
import { challenges } from '@/db/schema/challenges'

export const lessons = pgTable('lessons', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  unitId: integer('unit_id')
    .references(() => units.id, { onDelete: 'cascade' })
    .notNull(),
  order: integer('order').notNull(),
})

export const lessonsRelations = relations(lessons, ({ many, one }) => ({
  unit: one(units, {
    fields: [lessons.unitId],
    references: [units.id],
  }),
  challenges: many(challenges),
}))

export type LessonType = typeof lessons.$inferSelect
