import type { BrowserWindow} from 'electron'
import { ipcMain } from 'electron'
import type { IPC } from '../../../common'

let mainWindow: BrowserWindow

export function setupIPC (window: BrowserWindow) {
  mainWindow = window
  console.debug('@ipc Listening...')

  return ipc
}

export interface ListenOptions {
  channel: IPC
  listener: (event: Electron.IpcMainEvent, ...args: unknown[]) => unknown
}
export function listen ({ channel, listener }: ListenOptions) {
  ipcMain.on(channel, listener)
}

export interface EmitOptions {
  window?: BrowserWindow
  channel: IPC
  args: unknown[]
}
export function emit({ window, channel, args }: EmitOptions) {
  (window ?? mainWindow).webContents.send(channel, ...args)
}

export const ipc = {
  for: (module: string) => ({
    emit,
    listen({ channel, listener }: ListenOptions) {
      return listen({ channel, listener: wrap(module, channel, listener)})
    },
  }),
}
export type ipc = typeof ipc
function wrap (module: string, channel: IPC, listener: ListenOptions['listener']): ListenOptions['listener'] {
  return (event, ...args) => {
    console.debug(`@ipc#${channel}`)
    return listener(event, ...args)
  }
}
