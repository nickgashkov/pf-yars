<template>
  <ul>
    <li v-for="thing in things" v-bind:key="thing.id">{{thing.name}}</li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('things');

export default {
  name: "ThingListContainer",
  mounted () {
    this.loadThings()
  },
  computed: mapState(
    [
      'things'
    ]
  ),
  methods: mapActions(
    [
      'loadThings'
    ]
  )
}
</script>
