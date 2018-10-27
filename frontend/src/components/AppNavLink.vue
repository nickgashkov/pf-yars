<template>
  <router-link
    v-bind:to="{name: to}"
    class="navbar-item"
  >
    {{ name }}
  </router-link>
</template>

<script>
export default {
  name: "AppNavLink",
  props: {
    to: String,
    name: String
  }
};
</script>

<style scoped>
  .router-link-exact-active {
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>
