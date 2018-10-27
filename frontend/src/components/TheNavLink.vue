<template>
  <router-link
    v-bind:to="{'name': to}"
    class="navbar-item"
  >
    {{ name }}
  </router-link>
</template>

<script>
export default {
  name: "TheNavLink",
  props: {
    to: String,
    name: String
  }
};
</script>
