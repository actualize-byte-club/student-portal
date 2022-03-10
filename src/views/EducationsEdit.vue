<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
      studentEditParams: {},
      currentEducationEdit: 0,
      errors: [],
      newEducationParams: {},
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
      // axios delete request here
      var index = this.student.educations.indexOf(education);
      this.student.educations.splice(index, 1);
    },
    updateEducation: function (education) {
      console.log(education);
      this.currentEducationEdit = 0;
      // axios patch/put request here
    },
    addEducation: function () {
      console.log(this.newEducation);
      // axios post request here
    },
  },
};
</script>

<template>
  <div class="educations-edit">
    <div>
      <h1>Edit Education</h1>
      <p>{{ student.educations }}</p>
    </div>

    <h1>Student Education</h1>
    <div v-for="education in student.educations" v-bind:key="education.id">
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
    <div v-for="education in student.educations" v-bind:key="education.id">
      <div v-if="currentEducationEdit == education.id">
        <p>
          Start Date:
          <input type="text" v-model="education.start_date" />
        </p>
        <button v-on:click="updateEducation(education)">Save Changes</button>
        <p>
          End Date:
          <input type="text" v-model="education.end_date" />
        </p>
        <button v-on:click="updateEducation(education)">Save Changes</button>
        <p>
          Degree:
          <input type="text" v-model="education.degree" />
        </p>
        <button v-on:click="updateEducation(education)">Save Changes</button>
        <p>
          University:
          <input type="text" v-model="education.university_name" />
        </p>
        <button v-on:click="updateEducation(education)">Save Changes</button>
        <p>
          Details:
          <input type="text" v-model="education.details" />
        </p>
        <button v-on:click="updateEducation(education)">Save Changes</button>
      </div>
    </div>
    <input type="text" v-model="newEducationParams" />
    <button v-on:click="addEducation(educations)">Add Education</button>
  </div>
</template>

<style>
img {
  max-width: 200px;
  height: auto;
}
</style>
