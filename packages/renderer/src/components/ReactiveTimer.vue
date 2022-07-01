<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, ref } from 'vue'
import { get, set } from '@vueuse/core'
import { useTRPC } from '/@/use/trpc'

const { subscription } = useTRPC()

const time = ref(0)
let unsub = ref<ReturnType<typeof subscribe>>(() => false)

const subscribe = () => subscription('time:stream', null, {
  onNext (msg) {
  if(msg.type === 'started') console.log('We subbin')
  if(msg.type === 'stopped') console.log('We stoppin')
  if(msg.type === 'data') {
    set(time, msg.data.time)
  }
}})

onBeforeMount(() => {
  set(unsub, subscribe())
})

onBeforeUnmount(() => void console.log('We unsubbin') && get(unsub)())
</script>

<template>
  <p>Time is {{ time }}</p>
  <br><br>
  <code>packages/renderer/src/components/ReactiveTimer.vue</code>
</template>
