<script>
export default {
  data: function () {
    return {
      student: {
        first_name: "Jane",
        last_name: "Doe",
        experiences: [
          {
            id: 1,
            start_date: "Jan 1, 2020",
            end_date: "Dec 31, 2021",
            job_title: "Global Director",
            company_name: "Evil Corp",
            details: "Trying to take over the world with code.",
          },
          {
            id: 2,
            start_date: "Jan 1, 2021",
            end_date: "current",
            job_title: "Global CEO",
            company_name: "Evil Corp",
            details: "Leading the effort to take over the world with code.",
          },
        ],
      },
      currentExperienceEdit: 0,
      errors: [],
      updateExperienceParams: [],
      newExperienceParams: [],
      openAddExperience: false,
    };
  },
  created: function () {},
  // Need to add once we have access to backend
  methods: {
    openEditExperience: function (experience) {
      console.log(experience.id);
      this.currentExperienceEdit = experience.id;
      this.updateExperienceParams = experience;
    },
    deleteExperience: function (experience) {
      console.log(experience.id);
      console.log(this.student.experiences);
      // axios delete request here
      var index = this.student.experiences.indexOf(experience);
      this.student.experiences.splice(index, 1);
    },
    updateExperience: function (experience) {
      console.log(experience);
      this.currentExperienceEdit = 0;
      // axios patch/put request here
    },
    createExperience: function () {
      console.log(this.newExperienceParams);
      this.openAddExperience = false;
      // axios post request here
      this.student.experiences.push(this.newExperienceParams);
    },
  },
};
</script>

<template>
  <div class="experiences-edit">
    <div>
      <h1>New Experience</h1>
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
    <br />
    <button v-on:click="openAddExperience = true" v-if="!openAddExperience">Add Experience</button>
    <br />
  </div>
  <form v-if="openAddExperience" v-on:submit.prevent="createExperience(newExperienceParams)">
    <h2>Add A New Experience</h2>
    <label for="start_date">Start Date:</label>
    <br />
    <input type="text" id="start_date" name="start_date" v-model="newExperienceParams.start_date" />
    <br />
    <label for="end_date">End Date:</label>
    <br />
    <input type="text" id="end_date" name="end_date" v-model="newExperienceParams.end_date" />
    <br />
    <label for="job_title">Job Title:</label>
    <br />
    <input type="text" id="job_title" name="job_title" v-model="newExperienceParams.job_title" />
    <br />
    <label for="company_name">Company Name:</label>
    <br />
    <input type="text" id="company_name" name="company_name" v-model="newExperienceParams.company_name" />
    <br />
    <label for="details">Experience Details:</label>
    <br />
    <input type="text" id="details" name="details" v-model="newExperienceParams.details" />
    <br />
    <br />
    <input type="submit" value="Add Experience" />
  </form>
</template>

<style>
img {
  max-width: 200px;
  height: auto;
}
</style>
