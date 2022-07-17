<script setup lang="ts">
const emit = defineEmits(['save', 'discard'])
</script>
<template>
  <v-card class="mt-2">
    <v-card-text>
      <v-alert
        type="info"
        border=""
      >
        You have unsaved changes
      </v-alert>
    </v-card-text>
    <v-card-actions>
      <v-btn
        prepend-icon="mdi-floppy"
        @click="emit('save')"
      >
        Save
      </v-btn>
      <v-btn prepend-icon="mdi-delete">
        Discard
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
