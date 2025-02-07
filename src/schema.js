import { mysqlTable, varchar, mysqlEnum } from "drizzle-orm/mysql-core";

export const users = mysqlTable('poc_client', {
  uid: varchar("uid", { length: 100 }).primaryKey(),
  email: varchar("email", { length: 100 }).unique(),
  appType: varchar("appType", { length: 100 }),
  status: mysqlEnum('status', ['complete', 'incomplete']).notNull()
});