<template>
  <div>
    <v-card color="dark" class="mx-5 mb-5">
      <v-container class="pb-10">
        <v-btn text class="lightBlue--text pa-0" @click="backClicked()">
          <v-icon>mdi-arrow-left</v-icon>Back
        </v-btn>

        <h1 class="text-h4 font-weight-light light--text pb-5">Project Editor</h1>

        <v-divider dark></v-divider>

        <v-row class="mt-5 ml-1">
          <h4 class="text-h6 font-weight-light light--text">Category:</h4>
          <category-editor></category-editor>
        </v-row>

        <v-select
          class="pt-7"
          v-model="project.categories._id"
          :items="categories"
          :item-text="'name'"
          label="Category"
          :item-value="'_id'"
          outlined
          rounded
          dark
        ></v-select>

        <v-divider dark class="mt-1 mb-7"></v-divider>

        <v-form v-model="valid">
          <v-text-field
            v-model="project.title"
            label="Title"
            placeholder="Title"
            :disabled="isLoading"
            :rules="[rules.required]"
            outlined
            rounded
            clearable
            required
            dark
          ></v-text-field>

          <v-text-field
            v-model="project.subtitle"
            label="Subtitle"
            placeholder="Subtitle"
            :disabled="isLoading"
            :rules="[rules.required]"
            outlined
            rounded
            clearable
            required
            dark
          ></v-text-field>

          <v-text-field
            v-model="project.thumbnail"
            label="Thumbnail"
            placeholder="Thumbnail"
            :disabled="isLoading"
            :rules="[rules.required]"
            outlined
            rounded
            clearable
            required
            dark
          ></v-text-field>

          <v-text-field
            v-model="project.prev_src"
            label="Preview Image"
            placeholder="Preview Image"
            :disabled="isLoading"
            :rules="[rules.required]"
            outlined
            rounded
            clearable
            required
            dark
          ></v-text-field>

          <technologies-editor class="pt-5"></technologies-editor>

          <v-divider dark class="mt-5 mb-8"></v-divider>

          <link-editor class></link-editor>

          <v-divider dark class="mt-4 mb-8"></v-divider>

          <div>
            <h4 class="light--text">Featured:</h4>
            <v-switch v-model="project.featured" color="lighter" dark></v-switch>
          </div>

          <div>
            <h4 class="light--text mb-3">Date Created:</h4>
            <v-date-picker v-model="project.dateCreated" landscape dark color="lightGreen"></v-date-picker>
          </div>

          <v-textarea
            v-model="project.description"
            class="mt-10"
            label="Description"
            placeholder="Description"
            :disabled="isLoading"
            :rules="[rules.required]"
            outlined
            rounded
            clearable
            required
            dark
          ></v-textarea>

          <v-expansion-panels dark>
            <v-expansion-panel>
              <v-expansion-panel-header>Additional Images</v-expansion-panel-header>
              <v-expansion-panel-content>
                <images-editor :projectTitle="project.title"></images-editor>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-divider class="mt-3 mb-7" dark></v-divider>
          <v-btn
            rounded
            x-large
            class="mr-4"
            color="lightBlue lighter--text"
            v-if="!isLoading"
            :disabled="isLoading"
            @click="submitForm()"
          >SUBMIT</v-btn>

          <v-btn
            rounded
            x-large
            class="mr-3"
            color="darkRed lighter--text"
            v-if="!isLoading"
            :disabled="isLoading"
            @click="backClicked()"
          >CANCEL</v-btn>

          <v-progress-circular v-if="isLoading" indeterminate color="lighter"></v-progress-circular>

          <p v-if="showError" class="light--text my-4">{{ errorText }}</p>
        </v-form>
      </v-container>
    </v-card>

    <v-snackbar v-model="snackbar">{{ snackbarMessage }}</v-snackbar>
  </div>
</template>

<script>
import axios from "../../axios/axios";
import router from "../../router/index";
import TechnologiesEditor from "../../components/Project/Project Editor/TechnologiesEditor";
import CategoryEditor from "../../components/Project/Project Editor/CategoryEditor";
import LinkEditor from "../../components/Project/Project Editor/LinkEditor";
import ImagesEditor from "../../components/Project/Project Editor/ImagesEditor";

export default {
  data: () => ({
    isLoading: true,
    valid: false,
    project: { title: "", categories: { _id: -1 } },
    categories: [],
    showPassword: false,
    errorText: "",
    showError: false,
    snackbar: false,
    snackbarMessage: "",
    rules: {
      required: (value) => !!value || "Required.",
    },
  }),
  components: {
    TechnologiesEditor,
    CategoryEditor,
    LinkEditor,
    ImagesEditor,
  },
  mounted() {
    window.scrollTo(0, 0);
    this.project._id = this.$route.params.id;
    this.getProject();
    this.getCategories();
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
        const res = await axios.get(`/projects/${encodeURI(this.project._id)}`);
        this.project = res.data;

        this.isLoading = false;
      } catch (error) {
        router.push({ path: "/" });
      }
    },
    async getCategories() {
      try {
        const res = await axios.get("/categories");
        this.categories = res.data;
      } catch (error) {
        // pass
      }
    },
    submitForm() {
      if (this.valid) {
        this.save();
      } else {
        this.showError = true;
        this.errorText = "Invalid fields in form.";
      }
    },
    async save() {
      this.isLoading = true;

      try {
        await axios.put("/projects", this.project);

        router.push({ path: `/edit/project/${this.project._id}` });
        this.snackbarMessage = "Success!";
        this.snackbar = true;
      } catch (error) {
        this.snackbarMessage = "Error. Unable to save project.";
        this.snackbar = true;
      }

      this.isLoading = false;
    },
  },
};
</script>

<style>
</style>