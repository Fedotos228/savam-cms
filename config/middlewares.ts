import type { Core } from '@strapi/strapi'

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      origin: [
        'http://localhost:3000',
        'http://localhost:1337',
        'https://savam.vercel.app/',
        'savam-git-api-fedotos228s-projects.vercel.app',
        process.env.SITE_URL_INT,
        process.env.STRAPI_DOMAIN
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      keepHeaderOnError: true,
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]

export default config
