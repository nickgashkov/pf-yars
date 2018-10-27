<template>
  <app-detail v-bind:item="thing"/>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import AppDetail from '../components/AppDetail'

const { mapState, mapActions } = createNamespacedHelpers('things');

export default {
  name: "ThingDetailContainer",
  components: { AppDetail },
  mounted: function () {
    this.loadThing({"id": this.$route.params.id})
  },
  computed: mapState(
    [
      'thing'
    ]
  ),
  methods: mapActions(
    [
      'loadThing'
    ]
  )
}
</script>
