import { Subject } from 'rxjs'
import type { DiscordEvent } from './types'

export const DiscordSubject = new Subject<DiscordEvent>()
