<template>
  <div>
    <v-row class="ml-1">
      <h4 class="text-h6 font-weight-light light--text">Technologies:</h4>

      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mx-2" text dark v-bind="attrs" v-on="on" color="lighterOrange">Create New</v-btn>
        </template>

        <v-card dark class="pt-4 px-8 pb-8">
          <v-card-title class="light--text">Create a new technology</v-card-title>
          <v-row justify-sm="center">
            <v-col sm="11">
              <v-text-field
                v-model="newTechnologyName"
                label="Tehcnology Name"
                placeholder="Technology Name"
                :disabled="isLoading"
                outlined
                rounded
                clearable
                required
                dark
              ></v-text-field>

              <v-text-field
                v-model="newTechnologySrc"
                label="Tehcnology Src"
                placeholder="Technology Src"
                :disabled="isLoading"
                outlined
                rounded
                clearable
                required
                dark
              ></v-text-field>

              <v-btn
                rounded
                x-large
                class="mr-3"
                color="lightBlue lighter--text"
                v-if="!isLoading"
                :disabled="isLoading"
                @click="createTechnology()"
              >CREATE</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-row>

    <v-chip
      class="mt-6 mb-4 mr-4 lighter--text"
      color="darker"
      v-for="t, i in technologies"
      :key="i"
      close
      @click:close="removeTechnology(t._id, i)"
      dark
    >{{ t.technologies.name }}</v-chip>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mt-2" color="darkRed" small fab dark v-bind="attrs" v-on="on">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-list dark>
        <v-list-item
          class="pointer"
          v-for="(t, i) in allTechnologies"
          :key="i"
          @click="addTechnology(t._id)"
        >
          <v-list-item-title>{{ t.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import axios from "../../../axios/axios";

export default {
  data: () => ({
    projectID: -1,
    isLoading: false,
    dialog: false,
    allTechnologies: [],
    newTechnologyName: "",
    newTechnologySrc: "",
    technologies: [],
  }),
  mounted() {
    this.projectID = this.$route.params.id;

    this.getTechnolgies();
    this.getAllTechnologies();
  },
  methods: {
    async getTechnolgies() {
      try {
        const res = await axios.get(`/technologies/project/${this.projectID}`);
        this.technologies = res.data;
      } catch (error) {
        // pass
      }
    },
    async getAllTechnologies() {
      try {
        const res = await axios.get("/technologies");
        this.allTechnologies = res.data;
      } catch (error) {
        // pass
      }
    },
    async removeTechnology(id, index) {
      console.log(id);
      // remove by proj-tech id

      this.technologies.splice(index, 1);
    },
    async addTechnology(id) {
      alert("add techn id: " + id);
    },
    async createTechnology() {
      // Add to db

      this.getAllTechnologies();
    },
  },
};
</script>

<style>
</style>