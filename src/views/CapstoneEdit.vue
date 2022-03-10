<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
      currentCapstoneEdit: 0,
      errors: [],
      capstone: {},
    };
  },
  created: function () {
    axios.get(`/students/${this.$route.params.id}`).then((response) => {
      console.log("student to edit:", response.data);
      this.student = response.data;
    });
  },
  methods: {
    openEditCapstone: function (capstone) {
      console.log(capstone.id);
      this.currentCapstoneEdit = capstone.id;
    },
    deleteCapstone: function (capstone) {
      console.log(capstone.id);
      console.log(this.student.capstones);
      axios.delete(`/capstones/${capstone.id}`);
      if (confirm("are you sure you want to delete this?")) {
        axios.delete(`/capstones/${this.capstone.id}`).then((response) => {
          console.log("success", response.data);
        });
      }
      var index = this.student.capstones.indexOf(capstone);
      this.student.capstones.splice(index, 1);
    },
    updateCapstone: function (capstone) {
      console.log(capstone);
      this.currentCapstoneEdit = 0;
      axios.patch(`/capstones/${capstone.id}`);
      axios
        .patch(`/capstone/${this.capstone.id}`, this.capstone)
        .then((response) => {
          console.log("Updated Capstone:", response.data);
          this.$router.push(`/capstones/${this.capstone.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    addCapstone: function () {
      console.log(this.newCapstone);
      axios
        .post(`/capstones`, this.newRecipeParams)
        .then((response) => {
          console.log("New Capstone:", response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="capstoneedit">
    <router-link to="/me/edit">Back to Edit</router-link>
    <h1>Student Capstones Edit</h1>
    <div v-for="capstone in student.capstones" v-bind:key="capstone.id">
      <div>
        {{ capstone.name }}
        <p>
          <img v-bind:src="`${capstone.screenshot}`" alt="user photo" />
        </p>
        <p>
          <button v-on:click="openEditCapstone(capstone)">Edit</button>
          <button v-on:click="deleteCapstone(capstone)">Delete</button>
        </p>
      </div>
      <div v-if="currentCapstoneEdit == capstone.id">
        <p>
          Capstone name:
          <input type="text" v-model="capstone.name" />
        </p>
        <p>
          Capstone description:
          <input type="text" v-model="capstone.description" />
        </p>
        <p>
          Capstone url:
          <input type="text" v-model="capstone.url" />
        </p>
        <p>
          Capstone screenshot:
          <input type="text" v-model="capstone.screenshot" />
        </p>
        <button v-on:click="updateCapstone(capstone)">Save Changes</button>
      </div>
    </div>
    <router-link to="/capstones/new">Add new Capstone</router-link>
  </div>
</template>

<style>
img {
  max-width: 200px;
  height: auto;
}
</style>
