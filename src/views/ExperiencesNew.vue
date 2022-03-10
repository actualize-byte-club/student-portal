<script>
export default {
  data: function () {
    return {
      errors: [],
      newExperienceParams: {},
    };
  },
  created: function () {},
  // Need to add once we have access to backend
  methods: {
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
  <div class="experiences-new">
    <div>
      <h1>New Experience</h1>
    </div>
    <br />
    <br />
  </div>
  <form v-on:submit.prevent="createExperience(newExperienceParams)">
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
