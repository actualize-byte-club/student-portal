<script>
export default {
  data: function () {
    return {
      student: {
        first_name: "Jane",
        last_name: "Doe",
        email: "jane@gmail.com",
        phone_number: "312-123-3456",
        short_bio: "This is a short bio. Everyone knows my name. Fears my name.",
        linkedin_url: "https://www.linkedin.com/in/jackwhisler/",
        twitter_handle: "janedoe",
        website_url: "www.google.com",
        online_resume: "www.linkedin.com/janedoe",
        github_url: "www.github.com/janedoe",
        photo: "https://majornelson.com/wp-content/uploads/sites/7/2021/10/Evil-Genius-2.jpg",
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
        educations: [
          {
            id: 1,
            start_date: "Sep 1, 1990",
            end_date: "Jun 1, 1994",
            degree: "Certificate in Excellence",
            university_name: "Harvard",
            details: "If you know, you know.",
          },
          {
            id: 2,
            start_date: "Sep 1, 2000",
            end_date: "Jun 1, 2004",
            degree: "Certificate in Mediocrity",
            university_name: "Devry",
            details: "How the mighty hath fallen.",
          },
        ],
        skills: [
          { id: 1, name: "rails" },
          { id: 2, name: "ruby" },
          { id: 3, name: "project management" },
        ],
        capstones: [
          {
            name: "World Domination",
            description: "Solves world hunger, sells for a hefty profit and land rights.",
            url: "www.worlddomination.org",
            screenshot:
              "https://cdn.akamai.steamstatic.com/steam/apps/1128810/ss_53fa01d3fa5de609e9e77254b72e6cf82b51d641.1920x1080.jpg?t=1634868894",
          },
        ],
      },
      studentEditParams: {},
      currentEducationEdit: 0,
      errors: [],
      newEducationParams: {},
    };
  },
  created: function () {},
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
