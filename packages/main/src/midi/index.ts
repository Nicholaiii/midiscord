/* This will strictly only work with CJS require. Vite hates it any other way */
import type * as JZZ from 'jzz'
const jzz = require('jzz') as typeof JZZ
import { Subject } from 'rxjs'
import { MidiCodes } from '../../../common/midi/codes'

type message = ReturnType<typeof jzz.MIDI>
type MidiEvent = [code: MidiCodes, subject: HexCode, value: number]

export async function initialise() {
  const subject = new Subject<MidiEvent>()

  const midi = await jzz()
  const port = await midi.openMidiIn()

  console.log('@midi Opened:', port.name())

  function handler (msg: message) {
    const hex = msg.map(toHex)
    const code = parseCode(hex[0])
    if (code) subject.next([code, hex[1], msg[2]])
  }

  await port.connect(handler)
  subject.subscribe({
    next([code, subject, value]) {
      console.info(code, `from ${subject}`, `value: ${value}`)
    },
  })
}

type Hex = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'a'|'b'|'c'|'d'|'e'|'f'
export type HexCode = `${Hex}${Hex}`

function isHexCode(h: Hex | HexCode): h is HexCode {
  return h.length === 2
}

function toHex (d: number): HexCode {
  const hex = Number(d).toString(16) as Hex | HexCode
  return isHexCode(hex) ? hex : `0${hex}`
}


const HexCodeTests: [exp: RegExp, code: MidiCodes][] = [
  [/9./, MidiCodes.on],
  [/8./, MidiCodes.off],
  [/b./, MidiCodes.control],
]

function parseCode (d: HexCode): MidiCodes | undefined {
  const match = HexCodeTests.find(([exp]) => exp.test(d))
  return match ? match[1] : undefined
}
