import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema: "./src/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: 'mysql://admin:fedev212718@rds-uid-mysql-db.cdlybsqjew8w.us-east-1.rds.amazonaws.com:3306/rdsuidmysqldb',
  }
});


// mysql://admin:fedev212718@rds-uid-mysql-db.cdlybsqjew8w.us-east-1.rds.amazonaws.com:3306/rdsuidmysqldb
// mysql://admin:fedev212718@rds-uid-mysql-db.cxvxrklpvvsf.us-east-2.rds.amazonaws.com:3306/rdsuidmysqldb
// mysql://admin:fedev212718@rds-uid-mysql-db.crohmnohwnvk.ca-central-1.rds.amazonaws.com:3306/rdsuidmysqldb
// mysql://admin:fedev212718@rds-uid-mysql-db.cjkmoqdvi64y.eu-central-1.rds.amazonaws.com:3306/rdsuidmysqldb