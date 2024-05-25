import { relations } from 'drizzle-orm'
import { pgTable, text, integer } from 'drizzle-orm/pg-core'

import { courses } from '@/db/schema/courses'

export const userProgress = pgTable('user_progress', {
  userId: text('user_id').primaryKey(),
  userName: text('user_name').notNull().default('User'),
  userImgSrc: text('user_img_src').notNull().default('/logo.svg'),
  activeCourseId: integer('active_course_id').references(() => courses.id, { onDelete: 'cascade' }),
  hearts: integer('hearts').notNull().default(5),
  points: integer('points').notNull().default(0),
  gems: integer('gems').notNull().default(0),
})

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  activeCourse: one(courses, {
    fields: [userProgress.activeCourseId],
    references: [courses.id],
  }),
}))

export type UserProgressType = typeof userProgress.$inferSelect
