<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand :to="{ name: 'home' }">Wishbone</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'rankings' }" id="nav-item">Rankings</b-nav-item>
        <b-nav-item :to="{ name: 'predictions' }" id="nav-item-disabled" disabled>Predictions</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class NavBar extends Vue {
}
</script>

<style lang="scss">
#nav-item {
  color: #66fcf1;
}

#nav-item-disabled {
  color: #45a29e;
}
</style>
