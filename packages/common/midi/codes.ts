export const MidiCodes = {
  on: 'midi:on',
  off: 'midi:off',
  control: 'midi:control',
} as const

export type MidiCodes = typeof MidiCodes[keyof typeof MidiCodes]
