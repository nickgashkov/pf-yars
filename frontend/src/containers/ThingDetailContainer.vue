<template>
  <thing-detail v-bind:item="thing"/>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import ThingDetail from "../components/ThingDetail";

const { mapState, mapActions } = createNamespacedHelpers("things");

export default {
  name: "ThingDetailContainer",
  components: { ThingDetail },
  mounted: function() {
    this.loadThing({ id: this.$route.params.id });
  },
  computed: mapState(["thing"]),
  methods: mapActions(["loadThing"])
};
</script>
