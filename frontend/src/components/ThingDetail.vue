<template>
  <div class="columns">
      <thing-detail-item v-bind:item="item" class="column"/>
      <thing-detail-meta v-bind:item="item" class="column"/>
  </div>
</template>

<script>
  import ThingDetailItem from "./ThingDetailItem"
  import ThingDetailMeta from "./ThingDetailMeta"

  export default {
    name: "ThingDetail",
    components: { ThingDetailItem, ThingDetailMeta },
    props: {
      item: Object,
    }
  }
</script>
