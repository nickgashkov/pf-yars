<template>
  <div class="has-text-link">
    <span v-for="n in 5" v-bind:key="n">
      <v-icon v-if="n <= rating" name="star" scale="1.5"/>
      <v-icon v-else name="regular/star" scale="1.5"/>
    </span>
    <span class="has-margin-left is-size-5">{{ rating }}</span>
  </div>
</template>

<script>
export default {
  name: "AppRating",
  props: {
    rating: Number
  }
};
</script>

<style scoped>
.has-margin-left {
  margin-left: 10px;
}
</style>
