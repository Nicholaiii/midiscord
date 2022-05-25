import type { MidiCodes } from '../../../common/midi/codes'
import type * as JZZ from 'jzz'

export type Message = ReturnType<typeof JZZ.MIDI>
export type MidiEvent = [code: MidiCodes, subject: HexCode, value: number]
export type Hex = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'a'|'b'|'c'|'d'|'e'|'f'
export type HexCode = `${Hex}${Hex}`
