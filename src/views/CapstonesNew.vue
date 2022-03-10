<script>
import axios from "axios";

export default {
  data: function () {
    return {
      errors: [],
      newCapstone: {},
    };
  },
  created: function () {},
  methods: {
    addCapstone: function () {
      console.log(this.newCapstone);
      axios
        .post(`/capstones`, this.newCapstone)
        .then((response) => {
          console.log("New Capstone", response.data);
          this.$router.push("/me");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="capstone-new">
    <h1>New Capstone</h1>
    <p>
      name:
      <input type="text" v-model="newCapstone.name" />
    </p>
    <p>
      description:
      <input type="text" v-model="newCapstone.description" />
    </p>
    <p>
      url:
      <input type="text" v-model="newCapstone.url" />
    </p>
    <p>
      screenshot:
      <input type="text" v-model="newCapstone.screenshot" />
    </p>
    <button v-on:click="addCapstone()">Add Capstone</button>
  </div>
</template>

<style>
img {
  max-width: 200px;
  height: auto;
}
</style>
