<template>
  <div>
    <h1>ThingList page</h1>
    <thing-list-container/>
  </div>
</template>

<script>
import ThingListContainer from '@/containers/ThingListContainer.vue'

export default {
  name: "ThingList",
  components: { ThingListContainer }
}
</script>