<template>
  <span>{{ item.name }}</span>
</template>

<script>
  export default {
    name: "AppDetail",
    props: {
      item: Object
    }
  }
</script>
