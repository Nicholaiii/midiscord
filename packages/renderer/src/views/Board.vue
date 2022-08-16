<script setup lang="ts">
import { ref } from 'vue'
import type { Pad } from '/@common/index.js'
import PadButton from '/@/components/Board/PadButton.vue'

const pads = ref<Pad[]>([{
  name: 'First',
  file: 'C:\\',
}, {
  name: 'Second',
  file: 'D:\\',
}])
</script>

<template>
  <PadButton
    v-for="pad, index in pads"
    :key="index"
    :pad="pad"
  />
</template>

<style scoped>

</style>
