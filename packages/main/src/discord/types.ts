import type { Snowflake } from 'discord.js'
import type { Subject } from 'rxjs'

export type DiscordEvent = DiscordClientEvent | DiscordPlayerEvent

type DiscordClientEventBase = {
  target: 'client'
}

export type DiscordClientEvent = DiscordClientSetTokenEvent | DiscordClientJoinChannelEvent | DiscordClientStatus

/* Instructions */
export type DiscordClientSetTokenEvent = DiscordClientEventBase & {
  type: 'set-token'
  token: string
}
export type DiscordClientJoinChannelEvent = DiscordClientEventBase & {
  type: 'join-channel'
  channel: Snowflake
}

/* Status */
export type DiscordClientStatus = DiscordClientStatusReady
export type DiscordClientStatusReady = DiscordClientEventBase & {
  type: 'ready'
}

/* Player  */
export type DiscordPlayerEvent = {
  target: 'player'
}

export type DiscordSubject = Subject<DiscordEvent>
