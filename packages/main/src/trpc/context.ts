import type * as trpc from '@trpc/server'

export const createContext = () => ({ }) // no context

export type Context = trpc.inferAsyncReturnType<typeof createContext>
