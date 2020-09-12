<template>
  <b-navbar type="dark" variant="primary" class="navbar-static-top mb-3">
    <b-container fluid>
      <b-navbar-brand id="nav-brand" :to="{ name: 'home' }">
        Wishbone
      </b-navbar-brand>
      <b-navbar-nav align="right">
        <b-nav-item>
          <b-button size="sm" variant="light" class="my-2 my-sm-0" :to="{ name: 'rankings' }">Rankings</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class NavBar extends Vue {
  // look here to build this properly https://bootstrap-vue.org/docs/components/navbar
}
</script>

<style lang="scss" scoped>
#nav-brand {
  font-weight: bold;
  font-size: 1.5em;
}
</style>
