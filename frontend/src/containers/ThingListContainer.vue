<template>
  <app-table
      item-detail-route-name="thing-detail"

      v-bind:items="this.things"
      v-bind:headers="['Name', 'Description']"
      v-bind:values-keys="['name', 'description']"
      v-bind:item-detail-route-params-getter="getDetailRouteParams"
  />
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import AppTable from "../components/AppTable";

const { mapState, mapActions } = createNamespacedHelpers("things");

export default {
  name: "ThingListContainer",
  components: { AppTable },
  mounted() {
    this.loadThings();
  },
  computed: mapState(["things"]),
  methods: {
    getDetailRouteParams: function(item) {
      return { id: item.id };
    },
    ...mapActions(["loadThings"])
  }
};
</script>
