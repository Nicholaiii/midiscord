import type {  MidiEvent } from './types'
import { Subject } from 'rxjs'

export const MidiSubject = new Subject<MidiEvent>()
