<script>
export default {
  data: function () {
    return {
      message: "Student Show Page",
      // To confirm from API Team, confirm data types and key names
      student: {
        first_name: "Jane",
        last_name: "Doe",
        email: "jane@gmail.com",
        phone_number: "312-123-3456",
        short_bio: "This is a short bio. Everyone knows my name. Fears my name.",
        linkedin_url: "https://www.linkedin.com/in/jackwhisler/",
        twitter_handle: "@janedoe",
        website_url: "www.google.com",
        online_resume: "www.linkedin.com/janedoe",
        github_url: "www.github.com/janedoe",
        photo:
          "https://static.wikia.nocookie.net/simpsons/images/3/39/Hank_Scorpio.png/revision/latest?cb=20201209103604",
        experiences: [
          {
            start_date: "Jan 1, 2020",
            end_date: "Dec 31, 2021",
            job_title: "Global Director",
            company_name: "Evil Corp",
            details: "Trying to take over the world with code.",
          },
          {
            start_date: "Jan 1, 2021",
            end_date: "current",
            job_title: "Global CEO",
            company_name: "Evil Corp",
            details: "Leading the effort to take over the world with code.",
          },
        ],
        educations: [
          {
            start_date: "Sep 1, 1990",
            end_date: "Jun 1, 1994",
            degree: "Certificate in Excellence",
            university_name: "Harvard",
            details: "If you know, you know.",
          },
        ],
        skills: [{ name: "rails" }, { name: "ruby" }, { name: "project management" }],
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
    };
  },
  created: function () {},
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>Student Profile Data</h1>
    <h1>Student Experiences</h1>
    <h1>Student Education</h1>
    <div v-for="education in student.educations" v-bind:key="education.id">
      <h2>{{ education.start_date }} - {{ education.end_date }}</h2>
      <h2>{{ education.university_name }}</h2>
      <h2>{{ education.degree }}</h2>
      <h3>{{ education.details }}</h3>
    </div>
    <h1>Student Skills</h1>
    <h1>Student Capstones</h1>
  </div>
</template>

<style></style>
