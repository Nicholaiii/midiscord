import type { AppRouter } from '/@main/trpc'
import { createTRPCClient } from '@trpc/client'

const client = createTRPCClient<AppRouter>({
  url: 'http://localhost:1312/trpc',
})

export const useTRPC = () => {
  return {
    query: client.query.bind(client),
    mutation: client.mutation.bind(client),
  }
}
