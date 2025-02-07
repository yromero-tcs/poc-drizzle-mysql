import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { migrate } from 'drizzle-orm/mysql2/migrator';

const connection = await mysql.createConnection({
  host: 'poc-drizzle-mysql.cxvxrklpvvsf.us-east-2.rds.amazonaws.com',
  database: 'pocdrizzlemysqldb',
  port: 3306,
  user: 'admin',
  password: 'fedev212718'
});
const db = drizzle(connection);

await migrate (db, { migrationsFolder: 'drizzle'}); // needed for first run to create table
// await db.delete(users);
// await db.insert(users).values({uid: '765432', status: 'complete'});
// const result = await db.select().from(users);
// console.log(result);
await connection.end();