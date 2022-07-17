import { ConfigStore } from './store'
import { ConfigSubject } from './subject'

export const initialise = () => {
  ConfigSubject.subscribe({
    next(v) {
      if (v.type === 'open') ConfigStore.openInEditor()
    },
  })

  return { ConfigStore }
}


// trpc
// DiscordTokenSubject.subscribe(token => ConfigStore.set('discordToken', token))

// fs watch
// ConfigStore.onDidChange('discordToken', token => token && DiscordTokenSubject.next(token))
