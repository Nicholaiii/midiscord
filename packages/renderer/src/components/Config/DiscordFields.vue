<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  token?: string
}>()

const emit = defineEmits(['update:token'])
const token = useVModel(props, 'token', emit)
</script>

<template>
  <v-card class="my-2">
    <v-card-title>Discord</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="token"
          password
          label="Token"
        />
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
