<script setup lang="ts">
import { ref } from 'vue'
import type { Pad } from '/@common/index.js'
import PadButton from '/@/components/Board/PadButton.vue'

const pads = ref<Pad[]>([{
  name: 'First',
  file: 'C:\\',
  color: 'amber',
}, {
  name: 'Second',
  file: 'D:\\',
  color: 'indigo',
}])
</script>

<template>
  <v-card
    class="mx-auto"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="pad, index in pads"
          :key="index"
          :cols="2"
          class="px-1"
        >
          <PadButton :pad="pad" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>
