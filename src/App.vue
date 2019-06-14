<template>
  <div v-if='nonNavi.indexOf(urlPath) >= 0'>
    <Navigation />
  </div>
  <div v-else>
    <SinglePage />
  </div>
</template>

<script>
import Navigation from "./components/Navigation"
import SinglePage from "./components/SinglePage"

export default {
  data() {
    return {
      urlPath: location.pathname.substr(1),
      nonNavi: ['dashboard', 'settings']
    }
  },
  components: {
    Navigation,
    SinglePage
  }
};
</script>

<style>
</style>
