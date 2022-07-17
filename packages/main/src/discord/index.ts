
import * as Client from './client'
import { DiscordSubject } from './subject'

export async function initialise (token: string) {
  Client.initialise(DiscordSubject)

  if (token) DiscordSubject.next({ target: 'client', type: 'set-token', token })
}
