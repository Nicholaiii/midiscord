<script setup lang="ts">
const openGithub = () => window.open('https://github.com/nicholaiii/midiscord', '_blank')

</script>

<template>
  <v-footer
    app
    class="d-flex flex-column bg-deep-purple-lighten-1 pa-0"
    height="32"
  >
    <div class="d-flex w-100 align-center">
      <v-spacer />

      <v-btn
        class="mx-1 text-white"
        icon="mdi-github"
        variant="plain"
        size="small"
        @click="openGithub"
      />

      <v-btn
        class="mx-1 text-white"
        icon="mdi-cog"
        variant="plain"
        size="small"
        to="/config"
      />
    </div>
  </v-footer>
</template>

<style scoped>

</style>
