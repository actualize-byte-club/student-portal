<script>
export default {
  data: function () {
    return {
      message: "Welcome Student!",
    };
  },
  created: function () {},
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<style></style>
