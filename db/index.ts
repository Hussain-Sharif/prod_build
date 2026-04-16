import { neon, Pool } from '@neondatabase/serverless';
import { drizzle as drizzleHttp } from 'drizzle-orm/neon-http';
import { drizzle as drizzleWs } from 'drizzle-orm/neon-serverless'; 
import * as schema from './schema';

// Option A — HTTP (fast for serverless, no transactions)
// const sql = neon(process.env.DATABASE_URL!);
// const db = drizzleHttp(sql, { schema });

// Option B — WebSocket Pool (supports transactions, interactive sessions)
// const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
// const db = drizzleWs(pool, { schema });

// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL is not set");
// }

const sql = neon(process.env.DATABASE_URL!);
const db = drizzleHttp({ client: sql });

export default db;