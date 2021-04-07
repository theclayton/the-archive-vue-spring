<template>
  <div>
    <v-card color="dark" class="mx-5 mb-5">
      <v-container class="pb-15">
        <h1 class="text-h3 light--text font-weight-light text-center mt-10 mb-16">Admin Panel</h1>

        <v-row justify-sm="center">
          <v-col sm="6">
            <v-row>
              <v-text-field
                v-model="newProjectTitle"
                class="pr-5"
                placeholder="New Project Name..."
                outlined
                rounded
                clearable
                single-line
                dark
              ></v-text-field>

              <v-btn
                rounded
                x-large
                color="lighterOrange dark--text"
                @click="createProject()"
              >Create New Project</v-btn>
            </v-row>
          </v-col>
        </v-row>
        <v-divider dark class="mt-8 mb-9"></v-divider>

        <h4 class="text-h4 light--text font-weight-light mt-10 mb-4">Projects</h4>

        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left lighter--text">_id</th>
                <th class="text-left lighter--text">Title</th>
                <th class="text-left lighter--text">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="pointer"
                v-for="project in projects"
                :key="project._id"
                @click="projectClick(project)"
              >
                <td class="light--text">{{ project._id }}</td>
                <td class="light--text">{{ project.title }}</td>
                <td class="light--text">{{ project.dateCreated }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from "../../axios/axios";
import router from "../../router/index";

export default {
  data: () => ({
    projects: [],
    newProjectTitle: "",
  }),
  mounted() {
    window.scrollTo(0, 0);

    this.getProjects();
  },
  methods: {
    async getProjects() {
      try {
        let res = await axios.get(`/projects`);
        this.projects = res.data;
        this.isLoading = false;
      } catch (error) {
        // pass
      }
    },
    async createProject() {
      if (!this.newProjectTitle) return;

      try {
        await axios.post("/projects/create", { title: this.newProjectTitle });
        this.getProjects();
      } catch (error) {
        alert("Unable to create project." + error);
      }
    },
    projectClick(project) {
      router.push({ path: `edit/project/${project._id}` });
    },
  },
};
</script>

<style>
</style>