<template>
  <div>
    <v-card color="dark" class="mx-5 mb-15">
      <v-container fluid>
        <v-btn text class="lightBlue--text" @click="backClicked()">
          <v-icon>mdi-arrow-left</v-icon>Back
        </v-btn>

        <v-form v-model="valid">
          <v-row justify-sm="center">
            <v-col>
              <h1 class="text-h4 font-weight-light light--text">{{ project.title }}</h1>
            </v-col>
          </v-row>
          <v-row justify-sm="center">
            <v-col>
              <v-text-field
                v-model="username"
                class="mt-7"
                label="Username"
                placeholder="Username"
                :disabled="isLoading"
                :rules="[rules.required]"
                outlined
                rounded
                clearable
                required
                dark
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row v-if="isLoading" justify-sm="center">
            <v-col>
              <v-progress-circular indeterminate color="lighter"></v-progress-circular>
            </v-col>
          </v-row>

          <v-row justify-sm="center">
            <v-col>
              <v-btn
                rounded
                x-large
                color="lightBlue lighter--text"
                v-if="!isLoading"
                :disabled="isLoading"
                @click="submitForm()"
              >SUBMIT</v-btn>
            </v-col>
          </v-row>
          <v-row justify-sm="center">
            <v-col>
              <p v-if="showError" class="light--text mb-16">{{ errorText }}</p>
            </v-col>
          </v-row>
        </v-form>
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
    project: { title: "" },
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
    this.project.title = this.$route.params.name;
    this.getProject();
  },
  watch: {
    $route() {
      this.project.title = this.$route.params.name;
      this.getProject();
    },
  },
  methods: {
    backClicked() {
      history.back();
    },
    async getProject() {
      try {
        const res = await axios.get(`/projects/${encodeURI(this.project.title)}`);
        this.project = res.data.project;
        this.isLoading = false;
      } catch (error) {
        router.push({ path: "/" });
      }
    },
    submitForm() {
      if (this.valid) {
        this.signIn();
      } else {
        this.showError = true;
        this.errorText = "Invalid fields in form.";
      }
    },
  },
};
</script>

<style>
</style>