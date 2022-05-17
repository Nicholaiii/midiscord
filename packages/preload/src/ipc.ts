import { IpcMain, ipcRenderer } from 'electron'
import { exposeInMainWorld } from './exposeInMainWorld'
import { IPC } from '../../common'

// Export for types in contracts.d.ts
export const ipc = {
  send (channel: IPC) {
    ipcRenderer.send(channel)
  },
  receive (channel: IPC, listener: (event: Electron.IpcRendererEvent, ...data: any[]) => any) {
    return ipcRenderer.on(channel, (e, ...d) => void listener(e, ...d))
  }
}

exposeInMainWorld('ipc', ipc)
