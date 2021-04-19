<template>
  <div>
    <v-card color="dark" class="mx-5 mb-15">
      <v-row class="ma-0">
      <v-btn text class="lightBlue--text" @click="backClicked()">
        <v-icon>mdi-arrow-left</v-icon>Back
      </v-btn>
      <v-spacer></v-spacer>
        <p class="text-h6 font-weight-light lightGreen--text mr-6 mt-1 justify-self-end right-align text-right">{{ project.categories.name }}</p>
      </v-row>

      <v-container>
        <h1 class="text-h2 font-weight-light light--text d-none d-lg-flex pb-1">{{ project.title }}</h1>
        <h1 class="text-h5 font-weight-light lighter--text d-flex d-lg-none pt-1 pb-1">{{ project.title }}</h1>

        <h4 class="text-h5 font-weight-light light--text d-none d-lg-flex pb-1">{{ project.subtitle }}</h4>
        <h4 class="text-body-1 light--text d-flex d-lg-none pb-6">{{ project.subtitle }}</h4>

        <p class="text-body-1 lightOrange--text pb-6">{{ project.dateCreated }}</p>

        <v-divider dark></v-divider>

        <p class="lighterOrange--text pt-2">Project links:</p>
        <v-btn
          text
          color="lightGreen"
          class="pa-0"
          v-for="link in projectLinks"
          :key="link"
          target="_blank"
          :href="link.url"
        >{{ link.name }}</v-btn>

        <p class="lighterOrange--text pt-9">Technologies used:</p>
        <div class="d-flex justify-left">
          <v-tooltip bottom v-for="(t, i) in projectTechnologies" :key="i">
            <template v-slot:activator="{ on, attrs }">
              <a @click="findProjects(t.technologies.name)">
                <v-img
                  :src="t.technologies.src"
                  class="mr-4"
                  max-height="26"
                  max-width="26"
                  v-on="on"
                  v-bind="attrs"
                ></v-img>
              </a>
            </template>
            <span>{{ t.technologies.name }}</span>
          </v-tooltip>
        </div>

        <p class="lighterOrange--text pt-11">Description:</p>
        <p
          v-for="line, i in project.description.split('\n')"
          :key="i"
          class="text-body-1 light--text"
        >{{ line }}</p>

        <v-carousel
          cycle
          height="510"
          class="rounded-xl mt-15 mb-10"
          continuous
          hide-delimiter-background
          show-arrows-on-hover
          touch
        >
          <v-carousel-item v-for="(image, i) in projectImages" :key="i">
            <v-sheet dark class="fill-height">
              <v-row class="fill-height" align="end" justify="center">
                <div>
                  <v-img
                    :src="image.src"
                    :max-height="450"
                    :max-width="image.width"
                    class="justify-center align-self-center"
                  ></v-img>
                  <p class="text-subtitle-1 lighter--text text-center pt-1 pb-4">{{ image.caption }}</p>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from "../../axios/axios";
import router from "../../router/index";

export default {
  data: () => ({
    isLoading: false,
    valid: false,
    project: { title: "", categories: { name: "Other" }},
    projectTechnologies: [],
    projectLinks: [],
    projectImages: [],
    showPassword: false,
    errorText: "",
    showError: false,
    username: "",
    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),
  mounted() {
    window.scrollTo(0, 0);
    this.project._id = this.$route.params.id;

    this.getProject();
  },
  watch: {
    $route() {
      this.project._id = this.$route.params.id;
      this.getProject();
    },
  },
  methods: {
    backClicked() {
      history.back();
    },
    async getProject() {
      try {
        const res = await axios.get(
          `/projects/${encodeURI(this.project._id)}`
        );
        this.project = res.data;
        this.isLoading = false;

        this.getTechnologies();
        this.getLinks();
        this.getImages();
      } catch (error) {
        router.push({ path: "/" });
      }
    },
    async getTechnologies() {
      try {
        const res = await axios.get(
          `/technologies/project/${this.project._id}`
        );
        this.projectTechnologies = res.data;
      } catch (error) {
        // pass
      }
    },
    async getLinks() {
      try {
        const res = await axios.get(`/links/project/${this.project._id}`);
        this.projectLinks = res.data;
      } catch (error) {
        // pass
      }
    },
    async getImages() {
      try {
        const res = await axios.get(`/images/project/${this.project._id}`);
        this.projectImages = res.data;
      } catch (error) {
        // pass
      }
    },
    findProjects(terms) {
      router.push(`/search?terms=${terms}`);
    },
  },
};
</script>

<style>
</style>