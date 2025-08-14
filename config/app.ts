// config/app.ts
import env from '#start/env'
import app from '@adonisjs/core/services/app'
import { Secret } from '@adonisjs/core/helpers'
import { defineConfig } from '@adonisjs/core/http'

export const appKey = new Secret(env.get('APP_KEY'))

export const http = defineConfig({
  host: (env.get('HOST') || '0.0.0.0') as string,
  port: Number(env.get('PORT') || 3333),

  generateRequestId: true,
  allowMethodSpoofing: false,
  useAsyncLocalStorage: false,

  // Conversión a booleano para TRUST_PROXY
  trustProxy: (env.get('TRUST_PROXY') || 'false') === 'true',

  cookie: {
    domain: '',
    path: '/',
    maxAge: '2h',
    httpOnly: true,
    secure: app.inProduction,
    sameSite: 'lax',
  },
})
