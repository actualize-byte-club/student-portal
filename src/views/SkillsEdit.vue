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
            start_date: "Sep 1, 1990",
            end_date: "Jun 1, 1994",
            degree: "Certificate in Excellence",
            university_name: "Harvard",
            details: "If you know, you know.",
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
      currentStudentEdit: false,
      currentSkillEdit: 0,
      errors: [],
    };
  },
  created: function () {},
  methods: {
    openEditSkill: function (skill) {
      console.log(skill.id);
      this.currentSkillEdit = skill.id;
    },
    deleteSkill: function (skill) {
      console.log(skill.id);
      console.log(this.student.skills);
      // axios delete request here
      var index = this.student.skills.indexOf(skill);
      this.student.skills.splice(index, 1);
    },
    updateSkill: function (skill) {
      console.log(skill);
      this.currentSkillEdit = 0;
      // axios patch/put request here
    },
  },
};
</script>

<template>
  <div class="skills-edit">
    <div>
      <h1>Your Skills</h1>
      <div v-for="skill in student.skills" v-bind:key="skill.id">
        <p v-if="currentSkillEdit != skill.id">
          {{ skill.name }}
          <button v-on:click="openEditSkill(skill)">Edit</button>
          <button v-on:click="deleteSkill(skill)">Delete</button>
        </p>
        <div v-else>
          <p>
            Skill name:
            <input type="text" v-model="skill.name" />
          </p>
          <button v-on:click="updateSkill(skill)">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
