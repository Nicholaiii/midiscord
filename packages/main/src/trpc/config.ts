import { Subscription } from '@trpc/server'
import type { ConfigMsg } from '/@/config/types'
import { ConfigSubject } from '/@/config/subject'
import { createRouter } from './create-router'

export const configRouter = createRouter()
  .mutation('open', {
    resolve () {
      ConfigSubject.next({ type: 'open' })
      return undefined
    },
  })
  .subscription('message', {
    resolve () {
      return new Subscription<ConfigMsg>(emit => {
        console.log('Got a subscription')

        const midiSub = ConfigSubject.subscribe({
          next: emit.data,
          error: emit.error,
        })

        return midiSub.unsubscribe
    })
  },
})
