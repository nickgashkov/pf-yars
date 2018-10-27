<template>
  <div>
    <div>
      <router-link v-bind:to="{'name': 'home'}">Home</router-link> |
      <router-link v-bind:to="{'name': 'thing-list'}">Things</router-link> |
      <router-link v-bind:to="{'name': 'about'}">About</router-link> |
      <router-link v-bind:to="{'name': 'contact-me'}">Contact me</router-link>
    </div>
    <router-view/>
  </div>
</template>
