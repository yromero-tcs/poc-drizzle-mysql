import "dotenv/config";
import { defineConfig } from "drizzle-kit";

/**
 * Phase 3–4: With SSM port forwarding, traffic is mysql://127.0.0.1:<localPort>/rdsuidmysqldb
 * through the tunnel to RDS Proxy (TLS required on the proxy). Use the same localPort you
 * passed as localPortNumber (e.g. 13306 if Windows blocks 3306).
 *
 * Variables load from `.env` (via dotenv) or your shell before running drizzle-kit:
 *   DB_HOST=127.0.0.1
 *   DB_PORT=13306
 *   DB_USER=admin
 *   DB_PASSWORD=<from Secrets Manager or your vault>
 *   DB_NAME=rdsuidmysqldb
 */
export default defineConfig({
  dialect: "mysql",
  schema: "./src/schema.js",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.DB_HOST ?? "127.0.0.1",
    port: Number(process.env.DB_PORT ?? "13306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME ?? "rdsuidmysqldb",
    // Required for RDS Proxy (RequireTLS: true); tunnel is TCP-only, TLS is still negotiated with the proxy.
    ssl: { rejectUnauthorized: true },
  },
});