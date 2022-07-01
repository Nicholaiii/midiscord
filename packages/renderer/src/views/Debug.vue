<script setup lang="ts">
import ReactiveCounter from '/@/components/ReactiveCounter.vue'
import ReactiveHash from '/@/components/ReactiveHash.vue'
import ElectronVersions from '/@/components/ElectronVersions.vue'
import ReactiveTimer from '../components/ReactiveTimer.vue'
</script>

<template>
  <fieldset>
    <legend>Test tRPC Subscriptions</legend>
    <reactive-timer />
  </fieldset>

  <fieldset>
    <legend>Test Vue Reactivity</legend>
    <reactive-counter />
  </fieldset>

  <fieldset>
    <legend>Test Node.js API</legend>
    <reactive-hash />
  </fieldset>

  <fieldset>
    <legend>Environment</legend>
    <electron-versions />
  </fieldset>
</template>

<style scoped>
fieldset {
  margin: 2rem;
  padding: 1rem;
}
</style>
