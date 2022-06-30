import type { BrowserWindow } from 'electron'
import { createRouter } from './create-router'

let window: BrowserWindow

export const initialise = (w: BrowserWindow) => {
  window = w
}

export const windowRouter = createRouter()
  .query('close', {
    resolve: () => {
      window.close()
      return 'ok'
    },
  })
