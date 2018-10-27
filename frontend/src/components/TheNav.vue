<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <div class="navbar-item">YARS</div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <the-nav-link to="home" name="Home"/>
        <the-nav-link to="thing-list" name="Things"/>
      </div>
      <div class="navbar-end">
        <the-nav-link to="about" name="About"/>
        <the-nav-link to="contact-me" name="Contact Me"/>
      </div>
    </div>
  </nav>
</template>

<script>
import TheNavLink from "./TheNavLink";
export default {
  name: "TheNav",
  components: { TheNavLink }
};
</script>
