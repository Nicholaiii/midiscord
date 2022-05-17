export const AppWindow = {
  close: 'app-window:close',
  minimise: 'app-window:minimise',
  maximise: 'app-window:maximise'
} as const

export type AppWindow = typeof AppWindow[keyof typeof AppWindow]
