import express from 'express'
import cors from 'cors'
import * as trpcExpress from '@trpc/server/adapters/express'

import { appRouter, createContext } from './trpc'

const app = express()
app.use(cors({
  origin: ['http://localhost:1312', 'http://localhost:3000'],
}))

app.use('/trpc', trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
}))

export const listen = () => app.listen(1312, () => console.log('HTTP Listening'))
