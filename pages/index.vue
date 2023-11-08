<template>
  <div class="d-flex flex-column">
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
    <v-btn color="error" rounded @click="refresh">Refresh page</v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    route() {
      return this.$route
    }
  },
  mounted() {
    console.log('Component mounted.')
  },
  methods: {
    refresh() {
      this.$router.go()
    }
  }
}
</script>
