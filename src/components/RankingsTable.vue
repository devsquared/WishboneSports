<template>
  <div>
    <h2>{{ poll.name }}</h2>
    <h3>{{ poll.releaseDate }}</h3>
    <b-table striped hover :items="poll.rankings"></b-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class RankingsTable extends Vue {
  @Prop() private poll!: Record<string, string>;
}
</script>
