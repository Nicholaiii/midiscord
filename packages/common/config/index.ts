
// https://github.com/sindresorhus/electron-store
import type { Schema } from 'electron-store'
import Store from 'electron-store'

export interface Configuration {
  discordToken: string
  version: `${number}.${number}.${number}`
}

export const configSchema: Schema<Configuration> = {
  discordToken: { type: 'string' },
  version: {
    type: 'string',
    default: require('../../../package.json').version,
  },
}

export const ConfigStore = new Store<Configuration>({
  schema: configSchema,
})
