<script>
import axios from "axios";

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
            id: 1,
            name: "World Domination",
            description: "Solves world hunger, sells for a hefty profit and land rights.",
            url: "www.worlddomination.org",
            screenshot:
              "https://cdn.akamai.steamstatic.com/steam/apps/1128810/ss_53fa01d3fa5de609e9e77254b72e6cf82b51d641.1920x1080.jpg?t=1634868894",
          },
          {
            id: 2,
            name: "World Salvation",
            description: "Solves world hunger, a dark cult that plans to destroy the known world.",
            url: "www.worldsalvation.org",
            screenshot:
              "http://4.bp.blogspot.com/-ulwD6mNZ08k/VMNrja9XaZI/AAAAAAAATQY/F10ObNujXFs/s1600/planet-earth-asteroid-wide.jpg",
          },
        ],
      },
      currentCapstoneEdit: 0,
      errors: [],
      capstone: {},
    };
  },
  created: function () {},
  methods: {
    openEditCapstone: function (capstone) {
      console.log(capstone.id);
      this.currentCapstoneEdit = capstone.id;
    },
    deleteCapstone: function (capstone) {
      console.log(capstone.id);
      console.log(this.student.capstones);
      axios.delete(`/capstones/${capstone.id}`);
      var index = this.student.capstones.indexOf(capstone);
      this.student.capstones.splice(index, 1);
    },
    updateCapstone: function (capstone) {
      console.log(capstone);
      this.currentCapstoneEdit = 0;
      axios.patch(`/capstones/${capstone.id}`);
    },
  },
};
</script>

<template>
  <div class="capstoneedit">
    <router-link to="/me/edit">Back to Edit</router-link>
    <h1>Student Capstones Edit</h1>
    <div v-for="capstone in student.capstones" v-bind:key="capstone.id">
      <div>
        {{ capstone.name }}
        <p>
          <img v-bind:src="`${capstone.screenshot}`" alt="user photo" />
        </p>
        <p>
          <button v-on:click="openEditCapstone(capstone)">Edit</button>
          <button v-on:click="deleteCapstone(capstone)">Delete</button>
        </p>
      </div>
      <div v-if="currentCapstoneEdit == capstone.id">
        <p>
          Capstone name:
          <input type="text" v-model="capstone.name" />
        </p>
        <p>
          Capstone description:
          <input type="text" v-model="capstone.description" />
        </p>
        <p>
          Capstone url:
          <input type="text" v-model="capstone.url" />
        </p>
        <p>
          Capstone screenshot:
          <input type="text" v-model="capstone.screenshot" />
        </p>
        <button v-on:click="updateCapstone(capstone)">Save Changes</button>
      </div>
    </div>
    <router-link to="/capstones/new">Add new Capstone</router-link>
  </div>
</template>

<style>
img {
  max-width: 200px;
  height: auto;
}
</style>
