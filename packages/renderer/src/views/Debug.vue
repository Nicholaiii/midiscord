<script setup lang="ts">
import AppConfig from '/@/components/Debug/AppConfig.vue'
import MidiInspector from '/@/components/Debug/MidiInspector.vue'
import ReactiveCounter from '/@/components/Debug/ReactiveCounter.vue'
import ReactiveHash from '/@/components/Debug/ReactiveHash.vue'
import ElectronVersions from '/@/components/Debug/ElectronVersions.vue'
import ReactiveTimer from '/@/components/Debug/ReactiveTimer.vue'
</script>

<template>
  <fieldset>
    <legend>Application Configuration</legend>
    <app-config />
  </fieldset>

  <fieldset>
    <legend>Test tRPC Subscriptions</legend>
    <reactive-timer />
  </fieldset>

  <fieldset>
    <legend>Test MIDI input</legend>
    <midi-inspector />
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
