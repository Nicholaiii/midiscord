<script lang="ts" setup>
import {computed, ref} from 'vue'

const rawString = ref('Hello World')
/**
 * window.nodeCrypto was exposed from {@link module:preload}
 */
const hashedString = computed(() => window.nodeCrypto.sha256sum(rawString.value))
</script>

<template>
  <v-text-field
    v-model="rawString"
    label="Raw value"
  />
  <v-text-field
    v-model="hashedString"
    label="Hashed by node:crypto"
    readonly
  />
  <code>packages/renderer/src/components/ReactiveHash.vue</code>
</template>
