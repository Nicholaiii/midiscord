import type { BrowserWindow } from 'electron'
import { app } from 'electron'
import './security-restrictions'
import { restoreOrCreateWindow } from '/@/mainWindow'

import { setupIPC } from '/@/ipc'
import * as Window from '/@/window'
import * as Midi from '/@/midi'

/**
 * Prevent multiple instances
 */
const isSingleInstance = app.requestSingleInstanceLock()
if (!isSingleInstance) {
  app.quit()
  process.exit(0)
}
app.on('second-instance', restoreOrCreateWindow)


/**
 * Disable Hardware Acceleration for more power-save
 */
//app.disableHardwareAcceleration()

/**
 * Shout down background process if all windows was closed
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

/**
 * @see https://www.electronjs.org/docs/v14-x-y/api/app#event-activate-macos Event: 'activate'
 */
app.on('activate', restoreOrCreateWindow)


/**
 * Create app window when background process will be ready
 */
app.whenReady()
  .then(restoreOrCreateWindow)
  .then(main)
  .catch((e) => console.error('Failed create window:', e))


/**
 * Install Vue.js or some other devtools in development mode only
 */
/* This module for installing extensions is currently broken */
/* eslint-disable-next-line no-constant-condition */
if (false && import.meta.env.DEV) {
  app.whenReady()
    .then(() => import('electron-devtools-installer'))
    .then(({default: installExtension, VUEJS3_DEVTOOLS}) => installExtension(VUEJS3_DEVTOOLS, {
      loadExtensionOptions: {
        allowFileAccess: true,
      },
    }))
    .catch(e => console.error('Failed install extension:', e))
}

/**
 * Check new app version in production mode only
 */
if (import.meta.env.PROD) {
  app.whenReady()
    .then(() => import('electron-updater'))
    .then(({autoUpdater}) => autoUpdater.checkForUpdatesAndNotify())
    .catch((e) => console.error('Failed check updates:', e))
}

async function main (window: BrowserWindow) {
  try {
    const ipc = setupIPC(window)
    Window.handleIPC(ipc, window)

    await Midi.initialise()

    console.info('Ready!')
  } catch (error) {
    console.error(error)
  }
}
