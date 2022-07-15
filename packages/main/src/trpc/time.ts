import { Subscription } from '@trpc/server'
import { createRouter } from './create-router'

export const timeRouter = createRouter()
  .subscription('stream', {
    resolve () {
      return new Subscription<{ time: number }>(emit => {
        console.debug('trpc/time: Got a subscription')

        const interval = setInterval(() => {
          emit.data({ time: Date.now() })
        }, 1000)

        return () => clearInterval(interval)
    })
  },
})
