<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ item.name }}</h1>
      <h2 class="subtitle">{{ item.kind }}</h2>

      <figure class="image is-128x128">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </figure>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ThingDetailItem",
    props: {
      item: Object,
    }
  }
</script>
