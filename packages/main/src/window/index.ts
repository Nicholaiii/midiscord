import { IPC } from '../../../common'
import type { BrowserWindow } from 'electron'
import type { ipc } from '/@/ipc'

export function handleIPC (ipc: ipc, window: BrowserWindow) {
  const port = ipc.for('window')

  port.listen({
    channel: IPC.AppWindow.close,
    listener: function AppWindowClose () {
      console.log('Closing window...')
      window.close()
    },
  })
}

