import { BrowserWindow, ipcMain } from "electron"
import { IPC } from '../../../common'

export function setupIPC (window: BrowserWindow) {
  console.debug('@ipc Listening...')
  ipcMain.on(IPC.AppWindow.close, (event, ...args) => {
    console.log('@ipc Closing window')
    window.close()
  })
}
