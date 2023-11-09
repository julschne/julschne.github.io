<template>
  <v-app>
    <!-- Create a dark styled header bar -->
    <v-app-bar app dark color="primary">
      <!-- Create a navigation drawer button -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <!-- Create a title -->
      <v-toolbar-title>My App</v-toolbar-title>
      <!-- Create a spacer -->
      <v-spacer></v-spacer>
      <!-- Create a navigation drawer button -->
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <!-- Create a navigation drawer button -->
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <!-- Create a navigation drawer button -->
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <slot></slot>
    <!-- Create a small footer that only contains links to impressum -->
    <v-footer app dark class="d-flex justify-center">
      <span class="white--text">&copy; {{ currentYear }} varlix.io</span>
      <!-- Vertical Line Spacer -->
      <v-divider class="mx-3" vertical></v-divider>
      <v-btn text href="/impressum">Impressum</v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style></style>
