<script setup lang="ts">
import type { Pad } from '/@common/types'

defineProps<{
  pad: Pad
}>()
</script>

<template>
  <v-card :color="pad.color">
    <v-responsive :aspect-ratio="1/1">
      <v-card-title
        class="text-white"
      >
        {{ pad.name }}
      </v-card-title>
    </v-responsive>
  </v-card>
</template>

<style scoped>

</style>
