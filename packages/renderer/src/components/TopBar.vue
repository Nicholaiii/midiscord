<script setup lang="ts">
import { useTRPC } from '/@/use/trpc'

const { query } = useTRPC()

function close () {
  query('window:close')
}

</script>

<template>
  <v-system-bar
    id="nav"
    window
    class="mb-22"
  >
    <v-icon
      icon="mdi-piano"
      class="mr-2"
    />

    <span>midiscord</span>

    <v-spacer />

    <v-btn
      icon="mdi-minus"
      variant="text"
      size="small"
    />

    <v-btn
      icon="mdi-checkbox-blank-outline"
      variant="text"
      size="small"
      class="ml-2"
    />

    <v-btn
      icon="mdi-close"
      variant="text"
      size="small"
      class="ml-2"
      @click="close()"
    />
  </v-system-bar>
</template>

<style scoped>
#nav {
  -webkit-app-region: drag;
}
button {
  -webkit-app-region: none;
}
</style>
