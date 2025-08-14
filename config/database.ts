// config/database.ts
import { defineConfig } from '@adonisjs/lucid'
import env from '#start/env'

export default defineConfig({
  connection: 'pg',
  connections: {
    pg: {
      client: 'pg',
      connection: {
        host: env.get('DB_HOST'),
        port: Number(env.get('DB_PORT')),
        user: env.get('DB_USER'),
        password: env.get('DB_PASSWORD'),
        database: env.get('DB_DATABASE'),
        // ssl: env.get('DB_SSL', 'false') === 'true', // si lo usas en Render
      },
      // healthCheck: false, // ❌ quitarla si te marca error en tipos
      debug: false,
      migrations: {
        tableName: 'adonis_schema',
        naturalSort: true,
      },
    },
  },
})
