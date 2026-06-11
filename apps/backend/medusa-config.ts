import path from "path"
import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    databaseDriverOptions: {
      pool: {
        min: 2,
        max: 20,
        acquireTimeoutMillis: 60000,
        createTimeoutMillis: 30000,
        idleTimeoutMillis: 30000,
      },
    },
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  admin: {
    vite: (config) => {
      config.resolve = config.resolve || {}
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "/apps/backend/src": path.resolve(process.cwd(), "src"),
        "/server/apps/backend/src": path.resolve(process.cwd(), "src"),
      }
      config.server = config.server || {}
      config.server.fs = {
        allow: ["/server"],
      }
      return config
    },
  },
})
