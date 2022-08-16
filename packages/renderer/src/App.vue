<script lang="ts" setup>
import TopBar from '/@/components/TopBar.vue'
import Footer from '/@/components/AppFooter.vue'
import { isElectron } from '/@/util/is-electron'

</script>

<template>
  <v-app :full-height="false">
    <TopBar v-if="isElectron" />
    <v-main>
      <v-app-bar>
        <v-btn to="/board">
          Board
        </v-btn>
        <v-btn to="/debug">
          Debug
        </v-btn>
      </v-app-bar>
      <v-container fluid>
        <!-- component matched by the route will render here -->
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
