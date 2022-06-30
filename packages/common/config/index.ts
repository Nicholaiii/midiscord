
// https://github.com/sindresorhus/electron-store
import type { Schema } from 'electron-store'
import Store from 'electron-store'

export interface Configuration {
  discord: {
    token: string
  }
}

export const configSchema: Schema<Configuration> = {
  discord: {
    type: 'object',
    properties: {
      token: { type: 'string' },
    },
    additionalProperties: false,
  },
}

export const ConfigStore = new Store<Configuration>({
  schema: configSchema,
})
