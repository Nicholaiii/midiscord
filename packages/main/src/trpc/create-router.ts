import * as trpc from '@trpc/server'
import type { Context } from './context'

export const createRouter = () => {
  return trpc.router<Context>()
}
