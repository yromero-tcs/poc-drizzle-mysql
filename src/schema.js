import { mysqlTable, varchar, mysqlEnum } from "drizzle-orm/mysql-core";

export const users = mysqlTable('users', {
  uid: varchar("uid", { length: 100 }).primaryKey(),
  status: mysqlEnum('status', ['complete', 'incomplete']).notNull()
});