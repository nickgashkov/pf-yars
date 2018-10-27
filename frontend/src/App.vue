<template>
  <div>
    <the-nav/>
    <router-view/>
  </div>
</template>
<script>
import TheNav from "./components/AppNav";

export default {
  components: { TheNav }
};

</script>
