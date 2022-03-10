<script>
export default {
  data: function () {
    return {
      errors: [],
      newSkill: {},
    };
  },
  created: function () {},
  methods: {
    addSkill: function () {
      console.log(this.newSkill);
      // axios post request here
    },
  },
};
</script>

<template>
  <div class="skills-new">
    <div>
      <h1>Student Skills</h1>
      <p>
        Skill Name:
        <input type="text" v-model="newSkill.name" />
      </p>
      <button v-on:click="addSkill()">Add Skill</button>
    </div>
  </div>
</template>

<style></style>
