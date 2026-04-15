import { neon, Pool } from '@neondatabase/serverless';
import { drizzle as drizzleHttp } from 'drizzle-orm/neon-http';
import { drizzle as drizzleWs } from 'drizzle-orm/neon-serverless'; // 👈 Correct driver for Pool
import * as schema from './schema';

// Option A — HTTP (fast for serverless, no transactions)
// const sql = neon(process.env.DATABASE_URL!);
// const db = drizzleHttp(sql, { schema });

// Option B — WebSocket Pool (supports transactions, interactive sessions)
const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
const db = drizzleWs(pool, { schema });

export default db;