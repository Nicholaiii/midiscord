<script setup lang="ts">
import type { Pad } from '/@common/types'
import { get } from '@vueuse/core'

const props = defineProps<{
  pad: Pad
}>()

function click () {
  console.log(get(props.pad))
}
</script>

<template>
  <v-card
    :color="pad.color"
    class="gradient"
    @click="click"
  >
    <v-responsive :aspect-ratio="1/1">
      <v-img
        v-if="pad.image"
        :src="pad.image"
        :aspect-ratio="1/1"
        class="white--text"
        gradient="to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.5) 100%"
        cover
      >
        <v-card-title class="text-white">
          {{ pad.name }}
        </v-card-title>
      </v-img>
      <v-card-title v-else>
        {{ pad.name }}
      </v-card-title>
    </v-responsive>
  </v-card>
</template>

<style scoped>
.gradient {
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.5) 100%)
}
</style>
