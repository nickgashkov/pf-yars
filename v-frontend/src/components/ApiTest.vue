<template>
  <div>
    <h1>Things</h1>
    {{ things }}
    <h1>Errors</h1>
    {{ err }}
  </div>
</template>

<script>
  export default {
    name: "ApiTest",
    data: function () {
      return {
        things: [],
        err: null,
      }
    },
    mounted: function () {
      this.getThings();
    },
    methods: {
      getThings: function () {
        this.$http.get('/api/things/things/')
      .then((response) => {
          this.things = response.data;
        })
        .catch((err) => {
          this.things = [];
          this.err = err;
        })
      }
    }
  }
</script>

<style scoped>

</style>