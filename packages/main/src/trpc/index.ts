import { createRouter } from './create-router'
import { windowRouter } from './window'
import { timeRouter } from './time'
import { midiRouter } from './midi'

export { createContext } from './context'


export const appRouter = createRouter()
  .merge('window:', windowRouter)
  .merge('midi:', midiRouter)
   /* This is purely for debug purposes */
  .merge('time:', timeRouter)

// only export *type signature* of router!
// to avoid accidentally importing your API
// into client-side code
export type AppRouter = typeof appRouter
