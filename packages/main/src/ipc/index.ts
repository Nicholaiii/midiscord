import { BrowserWindow, ipcMain } from "electron"

export function setupIPC (window: BrowserWindow) {
  console.debug('@ipc Listening...')
  ipcMain.on('window:close', (event, ...args) => {
    console.log('@ipc Closing window')
    window.close()
  })
}
