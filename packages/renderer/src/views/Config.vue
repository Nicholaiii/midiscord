<script setup lang="ts">
import { ref, watch } from 'vue'
import { useConfirmDialog } from '@vueuse/core'

import Discord from '/@/components/Config/DiscordFields.vue'
import Controls from '/@/components/Config/ConfigControls.vue'

const token = ref<string>('abc')
watch(token, () => reveal())

/* eslint @typescript-eslint/no-unused-vars: off */
const {
  isRevealed,
  reveal,
  confirm,
  cancel,
  onReveal,
  onConfirm,
  onCancel,
} = useConfirmDialog()

</script>

<template>
  <p>{{ token }}</p>
  <Discord
    v-model:token="token"
  />
  <Controls
    v-show="isRevealed"
    @save="confirm"
  />
</template>

<style scoped>
  footer {
    left: 0;
  }
</style>
