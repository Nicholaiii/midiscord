<script setup lang="ts">
import { IPC } from '../../../common'
function close () {
  console.log('Closing!')
  window.ipc.send(IPC.AppWindow.close)
}
const lol = () => console.log(123123123)
</script>

<template>
  <div id="nav" class="flex flex-wrap justify-between items-center bg-zinc-700 text-zinc-100 grow">
    <span class="flex items-center">
      <img alt="Piano logo" src="../../assets/logo.svg" class="ml-1" width="24" />
      <h1 @click="lol" class="text-lg self-end ml-1">midiscord</h1>
    </span>
    <button @click="close()" class="justify-self-end mr-1">close</button>

  </div>
</template>

<style scoped>
#nav {
  -webkit-app-region: drag;
}
button {
  -webkit-app-region: none;
}
</style>
