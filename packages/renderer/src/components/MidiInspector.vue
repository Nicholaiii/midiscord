<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, ref } from 'vue'
import { get, set } from '@vueuse/core'
import { useTRPC } from '/@/use/trpc'
import type { MidiEvent } from '/@main/midi/types'

const { subscription } = useTRPC()

const lastEvent = ref<MidiEvent>()
let unsub = ref<ReturnType<typeof subscribe>>(() => false)

const subscribe = () => subscription('midi:events', null, {
  onNext (msg) {
  if(msg.type === 'started') console.log('We subbin')
  if(msg.type === 'stopped') console.log('We stoppin')
  if(msg.type === 'data') {
    set(lastEvent, msg.data)
  }
}})

onBeforeMount(() => {
  set(unsub, subscribe())
})

onBeforeUnmount(() => void console.log('We unsubbin') && get(unsub)())
</script>

<template>
  <p>Last MIDI Event: {{ lastEvent }}</p>
  <br><br>
  <code>packages/renderer/src/components/MidiInspector.vue</code>
</template>
