<script lang="ts" setup>
import TopBar from '/@/components/TopBar.vue'

const openGithub = () => window.open('https://github.com/nicholaiii/midiscord', '_blank')

</script>

<template>
  <v-app :full-height="false">
    <TopBar />
    <v-main>
      <v-app-bar>
        <v-btn to="/">
          Home
        </v-btn>
        <v-btn to="/debug">
          Debug
        </v-btn>
      </v-app-bar>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <!-- component matched by the route will render here -->
    <v-footer
      app
      class="d-flex flex-column bg-deep-purple-lighten-1 pa-0"
      height="32"
    >
      <div class="d-flex w-100 align-center px-4">
        <strong class="text-white">midiscord</strong>

        <v-spacer />

        <v-btn
          class="mx-4 text-white"
          icon="mdi-github"
          variant="plain"
          size="small"
          @click="openGithub"
        />
      </div>
    </v-footer>
  </v-app>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
