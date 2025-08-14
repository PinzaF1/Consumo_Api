// config/app.ts
import env from '#start/env'
import app from '@adonisjs/core/services/app'
import { Secret } from '@adonisjs/core/helpers'
import { defineConfig } from '@adonisjs/core/http'

export const appKey = new Secret(env.get('APP_KEY'))

export const http = defineConfig({
  generateRequestId: true,
  allowMethodSpoofing: false,
  useAsyncLocalStorage: false,

  // Si usas proxy/CDN y quieres confiar en X-Forwarded-*
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
