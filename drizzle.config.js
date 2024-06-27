import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema: "./src/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: 'mysql://admin:fedev212718@poc-drizzle-mysql.cxvxrklpvvsf.us-east-2.rds.amazonaws.com:3306/pocdrizzlemysqldb',
  }
});
