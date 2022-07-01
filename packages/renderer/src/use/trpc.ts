import type { AppRouter } from '/@main/trpc'
import { createTRPCClient } from '@trpc/client'
import { httpLink } from '@trpc/client/links/httpLink'
import { splitLink } from '@trpc/client/links/splitLink'
import { createWSClient, wsLink } from '@trpc/client/links/wsLink'

let persistentClient: ReturnType<typeof createClient>

export const useTRPC = () => {
  const { client } = init()

  return {
    query: client.query.bind(client),
    mutation: client.mutation.bind(client),
    subscription: client.subscription.bind(client),
  }
}

function init () {
  return { client: persistentClient ?? createClient() }
}

function createClient () {
  const wsClient = createWSClient({
    url: 'ws://localhost:1312',
  })

  const client = createTRPCClient<AppRouter>({
    links:[
      splitLink({
        condition: op => op.type === 'subscription',
        true: wsLink({
          client: wsClient,
        }),
        false: httpLink({
          url: 'http://localhost:1312/trpc',
        }),
      }),
    ],
  })

  return client
}
