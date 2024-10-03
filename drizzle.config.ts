import { Config, defineConfig } from "drizzle-kit"
import * as dotenv from 'dotenv'
dotenv.config({ path: ".env" })


export default {
    dialect: 'postgresql',
    schema: "./src/lib/db/schema.ts",
    dbCredentials: {
        url: process.env.DATABASE_URL_NEON!,
    }
} satisfies Config;


// 43