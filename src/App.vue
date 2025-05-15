<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer /> <!-- Add Footer component here -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue' 

export default {
  components: { Navbar, Footer }
}
</script>

<style>
/* Add any necessary global styles here */
</style>
