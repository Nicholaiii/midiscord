<script lang="ts" setup>
import TopBar from '/@/components/TopBar.vue'
</script>

<template>
  <TopBar />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/debug">Debug</router-link>
  </nav>

  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-zinc-900;
  @apply text-zinc-300;
}

body {
  @apply select-none;
  @apply bg-zinc-900;
  @apply text-zinc-300;
}

</style>
