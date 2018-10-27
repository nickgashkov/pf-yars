<template>
  <div>
    <the-nav/>
    <router-view/>
  </div>
</template>
<script>
import TheNav from "@/components/TheNav";

export default {
  components: { TheNav }
};

</script>
