import { createServer } from 'node:http'
import { join } from 'node:path'
import express from 'express'
import cors from 'cors'
import ws from 'ws'
import proxy from 'express-http-proxy'

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

if (import.meta.env.VITE_DEV_SERVER_URL) {

  console.log('Adding dev proxy')
  app.use('/', proxy(import.meta.env.VITE_DEV_SERVER_URL))

} else {

  app.use('/debug', (req, res) => {
    res.send({
      __dirname,
    })
  })

  app.use(express.static(join(__dirname, '../../renderer/dist')))

}

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
