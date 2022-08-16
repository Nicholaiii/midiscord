<script setup lang="ts">
import type { Pad } from '/@common/types'

defineProps<{
  pad: Pad
}>()
</script>

<template>
  <div>
    {{ pad.name }}
  </div>
</template>

<style scoped>

</style>
