<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <div class="navbar-item">YARS</div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <app-nav-link to="home" name="Home"/>
        <app-nav-link to="thing-list" name="Things"/>
      </div>
      <div class="navbar-end">
        <app-nav-link to="about" name="About"/>
        <app-nav-link to="contact-me" name="Contact Me"/>
      </div>
    </div>
  </nav>
</template>

<script>
import AppNavLink from "./AppNavLink";
export default {
  name: "TheNav",
  components: { AppNavLink }
};
</script>
