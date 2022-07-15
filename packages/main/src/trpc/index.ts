import { createRouter } from './create-router'

/* Routers */
import { windowRouter } from './window'
import { midiRouter } from './midi'
import { configRouter } from './config'
import { timeRouter } from './time'

export { createContext } from './context'


export const appRouter = createRouter()
  .merge('window:', windowRouter)
  .merge('midi:', midiRouter)
  .merge('config:', configRouter)
   /* This is purely for debug purposes */
  .merge('time:', timeRouter)

// only export *type signature* of router!
// to avoid accidentally importing your API
// into client-side code
export type AppRouter = typeof appRouter
