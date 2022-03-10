<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
      currentStudentEdit: false,
      currentSkillEdit: 0,
      errors: [],
      newSkill: {},
    };
  },
  created: function () {
    axios.get(`/students/${this.$route.params.id}`).then((response) => {
      console.log("student to edit:", response.data);
      this.student = response.data;
    });
  },
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
    addSkill: function () {
      console.log(this.newSkill);
      // axios post request here
    },
    updateStudent: function () {
      console.log(this.student);
      axios
        .patch(`/student/${this.student.id}`, this.student)
        .then((response) => {
          console.log("Updated Student:", response.data);
          this.$router.push(`/students/${this.student.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="studentedit">
    <div>
      <router-link to="/me">Back to Profile</router-link>
      <div>
        <h1>Edit My Data</h1>
        <h3>{{ student.first_name }} {{ student.last_name }}</h3>
        <h3>{{ student.email }}</h3>
        <p>
          Phone number:
          <input type="text" v-model="student.phone_number" />
        </p>
        <p>
          Short Bio:
          <input type="text" v-model="student.short_bio" />
        </p>
        <p>
          LinkedIn Profile:
          <input type="text" v-model="student.linkedin_url" />
        </p>
        <p>
          Twitter Handle:
          <input type="text" v-model="student.twitter_handle" />
        </p>
        <p>
          Website URL:
          <input type="text" v-model="student.website_url" />
        </p>
        <p>
          Online Resume URL:
          <input type="text" v-model="student.online_resume" />
        </p>
        <p>
          Github Profile:
          <input type="text" v-model="student.github_url" />
        </p>
        <p>
          Photo URL:
          <input type="text" v-model="student.photo" />
        </p>
        <button v-on:click="updateStudent()">Update Information</button>
      </div>
    </div>
    <br />
    <router-link to="/me/skills/edit">Edit Skills</router-link>
    <br />
    <router-link to="/me/educations/edit">Edit Educations</router-link>
    <br />
    <router-link to="/me/experiences/edit">Edit Experiences</router-link>
    <br />
    <router-link to="/me/capstone/edit">Edit Capstones</router-link>
  </div>
</template>

<style>
img {
  max-width: 200px;
  height: auto;
}
</style>
