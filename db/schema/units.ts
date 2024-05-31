import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

import { courses } from '@/db/schema/courses'
import { lessons } from './lessons'

export const units = pgTable('units', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  courseId: integer('course_id')
    .references(() => courses.id, { onDelete: 'cascade' })
    .notNull(),
  order: integer('order').notNull(),
})

export const unitsRelations = relations(units, ({ many, one }) => ({
  course: one(courses, {
    fields: [units.courseId],
    references: [courses.id],
  }),
  lessons: many(lessons),
}))

export type UnitType = typeof units.$inferSelect
