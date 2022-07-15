import { BehaviorSubject, Subject } from 'rxjs'
import { ConfigStore } from '../../../common'

export { ConfigStore }

export const DiscordTokenSubject = new BehaviorSubject<string>(ConfigStore.get('discordToken'))

export type ConfigMsg = {
  type: 'open'
}

export const ConfigSubject = new Subject<ConfigMsg>()
ConfigSubject.subscribe({
  next(v) {
    if (v.type === 'open') ConfigStore.openInEditor()
  },
})

// trpc
// DiscordTokenSubject.subscribe(token => ConfigStore.set('discordToken', token))

// fs watch
// ConfigStore.onDidChange('discordToken', token => token && DiscordTokenSubject.next(token))
