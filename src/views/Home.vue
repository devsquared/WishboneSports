<template>
  <div class="home">
    <NavBar />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/rankings">Rankings</router-link>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
    // HelloWorld
  }
}
</script>
