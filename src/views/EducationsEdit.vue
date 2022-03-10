<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
      studentEditParams: {},
      currentEducationEdit: 0,
      errors: [],
    };
  },
  created: function () {
    axios.get(`/students/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.student = response.data;
    });
  },
  methods: {
    openEditEducations: function (education) {
      console.log(education.id);
      this.currentEducationEdit = education.id;
    },
    deleteEducation: function (education) {
      console.log(education.id);
      console.log(this.student.educations);
      axios.delete(`/educations/${education.id}`).then((response) => {
        console.log("Deleted", response.data);
      });
      var index = this.student.educations.indexOf(education);
      this.student.educations.splice(index, 1);
    },
    updateEducation: function (education) {
      console.log(education);
      this.currentEducationEdit = 0;
      axios.patch(`/educations/${education.id}`).then((response) => {
        console.log("Updated education", response.data);
      });
    },
  },
};
</script>

<template>
  <div class="educations-edit">
    <h1>Edit Education</h1>
    <div v-for="education in student.educations" v-bind:key="education.id">
      <div v-if="currentEducationEdit != education.id">
        <h2>{{ education.start_date }} - {{ education.end_date }}</h2>
        <h2>{{ education.university_name }}</h2>
        <h2>{{ education.degree }}</h2>
        <h3>{{ education.details }}</h3>
        <p>
          {{ education.name }}
          <button v-on:click="openEditEducations(education)">Edit</button>
          <button v-on:click="deleteEducation(education)">Delete</button>
        </p>
      </div>
      <div v-else>
        <p>
          Start Date:
          <input type="text" v-model="education.start_date" />
        </p>
        <p>
          End Date:
          <input type="text" v-model="education.end_date" />
        </p>
        <p>
          Degree:
          <input type="text" v-model="education.degree" />
        </p>
        <p>
          University:
          <input type="text" v-model="education.university_name" />
        </p>
        <p>
          Details:
          <input type="text" v-model="education.details" />
        </p>
        <button v-on:click="updateEducation(education)">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<style></style>
