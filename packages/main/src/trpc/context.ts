import type * as trpc from '@trpc/server'
import type * as trpcExpress from '@trpc/server/adapters/express'

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({ req, res }) // no context

export type Context = trpc.inferAsyncReturnType<typeof createContext>
