import { Client, Intents } from 'discord.js'
import type { Observer, Subscription } from 'rxjs'
import { filter, Observable } from 'rxjs'
import type { DiscordClientEvent, DiscordClientSetTokenEvent, DiscordClientStatus, DiscordEvent, DiscordSubject } from './types'

type DiscordClientObserver = Observer<DiscordClientEvent>

const createClient = () => new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES],
})

const clientFilter = filter(function isClientEvent (event: DiscordEvent): event is DiscordClientEvent {
  return event.target === 'client'
})

function handleEvents (client: Client) {
  const events = new Observable<DiscordClientStatus>(function subscribe (subscriber)  {
    const ready = () => subscriber.next({ target: 'client', type: 'ready' })

    client.on('ready', ready)
    client.on('error', subscriber.error)

    return function unsubscribe () {
      client.off('ready', ready)
      client.off('error', subscriber.error)
    }
  })

  return events
}


export function registerObserver (subject: DiscordSubject) {
  let client: Client
  let sub: Subscription

  async function setupClient (token: string) {
    if (client) client.destroy()
    if (sub) sub.unsubscribe()
    client = createClient()
    sub = handleEvents(client).subscribe(subject)
    try {
      await client.login(token)
    } catch (error) {
      subject.error(error)
    }
  }


  async function setToken (event: DiscordClientSetTokenEvent) {
    await setupClient(event.token)
  }

  async function next (event: DiscordClientEvent) {
    if (event.type === 'set-token') await setToken(event)
    if (event.type === 'ready') console.log('Discord client ready')
  }

  function error (event: DiscordClientEvent) {
    console.error(event)
  }

  function complete () {
    console.info('Discord subject complete')
  }

  const clientObserver: DiscordClientObserver = { next, error, complete }

  subject.pipe(clientFilter).subscribe(clientObserver)
}

export function initialise (subject: DiscordSubject) {
  registerObserver(subject)
}
