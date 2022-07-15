import { Subject } from 'rxjs'
import type { DiscordEvent } from './types'
import * as Client from './client'

export async function initialise (token: string) {
  const DiscordSubject = new Subject<DiscordEvent>()
  Client.initialise(DiscordSubject)

  if (token) DiscordSubject.next({ target: 'client', type: 'set-token', token })
}
