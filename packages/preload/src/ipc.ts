import { ipcRenderer } from 'electron'
import { exposeInMainWorld } from './exposeInMainWorld'

// Export for types in contracts.d.ts
export const ipc = ipcRenderer

exposeInMainWorld('ipc', ipc)
