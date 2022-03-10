<script>
export default {
  data: function () {
    return {
      errors: [],
      newEducationParams: {},
    };
  },
  created: function () {},
  methods: {
    addEducation: function () {
      console.log(this.newEducationParams);
      // axios post request here
    },
  },
};
</script>

<template>
  <div class="educations-new">
    <form v-on:submit.prevent="addEducation(newEducationParams)">
      <h2>Add Education</h2>
      <label for="start_date">Start Date:</label>
      <br />
      <input type="text" id="start_date" name="start_date" v-model="newEducationParams.start_date" />
      <br />
      <label for="end_date">End Date:</label>
      <br />
      <input type="text" id="end_date" name="end_date" v-model="newEducationParams.end_date" />
      <br />
      <label for="job_title">Degree:</label>
      <br />
      <input type="text" id="job_title" name="job_title" v-model="newEducationParams.degree" />
      <br />
      <label for="company_name">University:</label>
      <br />
      <input type="text" id="company_name" name="company_name" v-model="newEducationParams.university" />
      <br />
      <label for="details">Details:</label>
      <br />
      <input type="text" id="details" name="details" v-model="newEducationParams.details" />
      <br />
      <br />
      <input type="submit" />
    </form>
  </div>
</template>

<style></style>
