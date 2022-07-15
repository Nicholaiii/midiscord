import { Subscription } from '@trpc/server'
import { createRouter } from './create-router'
import { MidiSubject } from '/@/midi'
import type { MidiEvent } from '/@/midi/types'

export const midiRouter = createRouter()
  .subscription('events', {
    resolve () {
      return new Subscription<MidiEvent>(emit => {

        const midiSub = MidiSubject.subscribe({
          next: emit.data,
          error: emit.error,
        })

        return midiSub.unsubscribe
    })
  },
})
