<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
      currentExperienceEdit: 0,
      errors: [],
      updateExperienceParams: [],
      newExperienceParams: [],
    };
  },
  created: function () {
    axios.get(`/students/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.student = response.data;
    });
  },
  methods: {
    openEditExperience: function (experience) {
      console.log(experience.id);
      this.currentExperienceEdit = experience.id;
      this.updateExperienceParams = experience;
    },
    deleteExperience: function (experience) {
      console.log(experience.id);
      axios.delete(`/experiences/${experience.id}`).then((response) => {
        console.log("Deleted", response.data);
      });
      var index = this.student.experiences.indexOf(experience);
      this.student.experiences.splice(index, 1);
    },
    updateExperience: function (experience) {
      console.log(experience);
      this.currentExperienceEdit = 0;
      axios.patch(`/experiences/${experience.id}`).then((response) => {
        console.log("Updated experience", response.data);
      });
    },
  },
};
</script>

<template>
  <div class="experiences-edit">
    <router-link to="/me/edit">Back to Edit</router-link>
    <div>
      <h1>Edit Experience Data</h1>
      <div v-for="experience in student.experiences" v-bind:key="experience.id">
        <h2>{{ experience.job_title }}, {{ experience.company_name }}</h2>
        <p>From: {{ experience.start_date }} To: {{ experience.end_date }}</p>
        <p>{{ experience.details }}</p>
        <button v-on:click="openEditExperience(experience)">Edit</button>
        <button v-on:click="deleteExperience(experience)">Delete</button>
        <div v-if="currentExperienceEdit == experience.id">
          <p>
            Start Date:
            <input type="text" v-model="updateExperienceParams.start_date" />
          </p>
          <p>
            End Date:
            <input type="text" v-model="updateExperienceParams.end_date" />
          </p>
          <p>
            Job Title:
            <input type="text" v-model="updateExperienceParams.job_title" />
          </p>
          <p>
            Company Name:
            <input type="text" v-model="updateExperienceParams.company_name" />
          </p>
          <p>
            Details:
            <input type="text" v-model="updateExperienceParams.details" />
          </p>
          <button v-on:click="updateExperience(updateExperienceParams)">Update Experience</button>
        </div>
      </div>
    </div>
    <router-link to="/experiences/new">Add new Experience</router-link>
  </div>
</template>

<style></style>
