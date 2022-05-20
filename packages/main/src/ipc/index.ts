import { BrowserWindow, ipcMain } from "electron"
import { IPC } from '../../../common'

let mainWindow: BrowserWindow

export function setupIPC (window: BrowserWindow) {
  mainWindow = window
  console.debug('@ipc Listening...')
  ipcMain.on(IPC.AppWindow.close, (event, ...args) => {
    console.log('@ipc Closing window')
    window.close()
  })
}

export interface ListenOptions {
  channel: IPC
  listener: (event: Electron.IpcMainEvent, ...args: any[]) => any
}
export function listen ({ channel, listener }: ListenOptions) {
  ipcMain.on(channel, listener)
}

export interface EmitOptions {
  window: BrowserWindow
  channel: IPC
  args: any[]
}
export function emit({ window, channel, args }: EmitOptions) {
  (window ?? mainWindow).webContents.send(channel, ...args)
}
