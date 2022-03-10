<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
      currentStudentEdit: false,
      currentSkillEdit: 0,
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
    openEditSkill: function (skill) {
      console.log(skill.id);
      this.currentSkillEdit = skill.id;
    },
    deleteSkill: function (skill) {
      console.log(skill.id);
      console.log(this.student.skills);
      axios.delete(`/skills/${skill.id}`).then((response) => {
        console.log("Deleted", response.data);
      });
      var index = this.student.skills.indexOf(skill);
      this.student.skills.splice(index, 1);
    },
    updateSkill: function (skill) {
      console.log(skill);
      this.currentSkillEdit = 0;
      axios.patch(`/skills/${skill.id}`).then((response) => {
        console.log("Updated skill", response.data);
      });
    },
  },
};
</script>

<template>
  <div class="skills-edit">
    <router-link to="/me/edit">Back to Edit</router-link>
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
    <router-link to="/skills/new">Add new Skill</router-link>
  </div>
</template>

<style></style>
