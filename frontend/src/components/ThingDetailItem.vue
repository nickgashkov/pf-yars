<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">
          {{ item.name }}
          <app-rating v-bind:rating="item.rating"/>
        </h1>
        <h2 class="subtitle">{{ item.kind }}</h2>

        <figure class="image">
          <img v-bind:src="item.image">
        </figure>
      </div>
    </section>

    <section class="section">
      {{ item.description }}
    </section>
  </div>
</template>

<script>
import AppRating from "./AppRating";
export default {
  name: "ThingDetailItem",
  components: {
    AppRating
  },
  props: {
    item: Object
  }
};
</script>

<style scoped>
div.container {
  max-width: 100%;
}
</style>
