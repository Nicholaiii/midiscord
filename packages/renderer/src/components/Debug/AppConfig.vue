<script lang="ts" setup>
import { useTRPC } from '/@/use/trpc'

const { mutation } = useTRPC()

const openInEditor = () => mutation('config:open')
</script>

<template>
  <v-btn
    prepend-icon="mdi-pencil"
    @click="openInEditor"
  >
    Open in Editor
  </v-btn>
  <br><br>
  <code>packages/renderer/src/components/AppConfig.vue.vue</code>
</template>
