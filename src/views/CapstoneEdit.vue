<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
      currentCapstoneEdit: 0,
      errors: [],
      capstone: {},
      newCapstone: {},
    };
  },
  created: function () {},
  methods: {
    openEditCapstone: function (capstone) {
      console.log(capstone.id);
      this.currentCapstoneEdit = capstone.id;
    },
    deleteCapstone: function (capstone) {
      console.log(capstone.id);
      console.log(this.student.capstones);
      axios.delete(`/capstones/${capstone.id}`);
      var index = this.student.capstones.indexOf(capstone);
      this.student.capstones.splice(index, 1);
    },
    updateCapstone: function (capstone) {
      console.log(capstone);
      this.currentCapstoneEdit = 0;
      axios.patch(`/capstones/${capstone.id}`);
    },
    addCapstone: function () {
      console.log(this.newCapstone);
      axios.post(`/capstones`);
    },
  },
};
</script>

<template>
  <div class="capstoneedit">
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
