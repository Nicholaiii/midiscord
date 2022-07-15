import { createServer } from 'node:http'
import express from 'express'
import cors from 'cors'
import ws from 'ws'
import * as trpcExpress from '@trpc/server/adapters/express'
import { applyWSSHandler } from '@trpc/server/adapters/ws'

import type { AppRouter} from './trpc'
import { appRouter, createContext } from './trpc'

const app = express()

const viteUrl = import.meta.env.VITE_DEV_SERVER_URL

app.use(cors({
  origin: [
    'http://localhost:1312',
    ...(viteUrl ? [new URL(viteUrl).origin] : []),
  ],
}))

app.use('/trpc', trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
}))

export const listen = () => {
  const server = createServer(app)
  const wss = new ws.Server({ server })
  applyWSSHandler<AppRouter>({
    wss,
    router: appRouter,
    createContext,
  })

  wss.on('listening', () => console.log('WS Listening'))
  server.listen(1312, () => console.log('HTTP Listening'))

  return server
}
