import { relations } from 'drizzle-orm'
import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'

import { userProgress } from '@/db/schema/userProgress'
import { units } from '@/db/schema/units'

export const courses = pgTable('courses', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  altCode: varchar('alt_code', { length: 2 }).notNull(),
})

export const coursesRelations = relations(courses, ({ many }) => ({
  userProgress: many(userProgress),
  units: many(units),
}))

export type CourseType = typeof courses.$inferSelect
