<template>
  <div>
    <NavBar />
    <h1>Rankings</h1>
    <div v-for="poll in thepolls" :key="poll.name">
      <RankingsTable :poll="poll"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    NavBar: () => import(/* webpackChunkName: "nav-bar" */ '@/components/NavBar.vue'),
    RankingsTable: () => import(/* webpackChunkName: "rankings-table" */ '@/components/RankingsTable.vue')
  }
})

export default class Rankings extends Vue {
  thepolls () {
    // here we need to make a call to the collegeFootballDataAPI for the polls and map them
    // to the poll objects that i have created
  }
}
</script>
