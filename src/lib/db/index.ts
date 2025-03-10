import { neon, neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http';

neonConfig.fetchConnectionCache = true
if (!process.env.DATABASE_URL_NEON) {
    throw new Error(" database url not found !!!");

}

const sql = neon(process.env.DATABASE_URL_NEON!)

export const db = drizzle(sql);

export type ChatStatusResponse = {
    status: 'processing' | 'complete' | 'failed';
  };