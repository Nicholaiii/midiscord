import { ConfigStore } from './store'

import { BehaviorSubject, Subject } from 'rxjs'
import type { ConfigMsg } from './types'

export const DiscordTokenSubject = new BehaviorSubject<string>(ConfigStore.get('discordToken'))
export const ConfigSubject = new Subject<ConfigMsg>()
