import { createRouter } from './create-router'
import { windowRouter } from './window'
export { createContext } from './context'

export const appRouter = createRouter()
  .merge('window:', windowRouter)

// only export *type signature* of router!
// to avoid accidentally importing your API
// into client-side code
export type AppRouter = typeof appRouter
