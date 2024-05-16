import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'

export const courses = pgTable('courses', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  altCode: varchar('alt_code', { length: 2 }).notNull(),
})

export type Course = typeof courses.$inferSelect
