<template>
  <div>
    <v-card color="dark" class="mx-5 mb-15 text-center">
      <v-container fluid>
        <v-form v-model="valid">
          <v-row justify-sm="center">
            <v-col sm="5">
              <h1 class="text-h4 font-weight-light light--text mt-14">login</h1>
            </v-col>
          </v-row>
          <v-row justify-sm="center">
            <v-col sm="5">
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
          <v-row justify-sm="center">
            <v-col sm="5">
              <v-text-field
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                :disabled="isLoading"
                :rules="[rules.required, rules.min]"
                counter
                clearable
                outlined
                rounded
                required
                dark
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row v-if="isLoading" justify-sm="center">
            <v-col sm="5">
              <v-progress-circular indeterminate color="lighter"></v-progress-circular>
            </v-col>
          </v-row>

          <v-row justify-sm="center">
            <v-col sm="5">
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
            <v-col sm="5">
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
    showPassword: false,
    errorText: "",
    showError: false,
    username: "",
    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 6 || "Min 6 characters",
    },
  }),
  methods: {
    submitForm() {
      if (this.valid) {
        this.signIn();
      } else {
        this.showError = true;
        this.errorText = "Invalid fields in form.";
      }
    },
    async signIn() {
      try {
        this.isLoading = true;
        this.showError = false;

        await axios.get("/login", {
          auth: {
            username: this.username,
            password: this.password,
          },
        });

        this.$store.dispatch({
          type: "login",
          username: this.username,
          password: this.password,
        });

        this.isLoading = false;
        router.push({ path: "/admin" });
      } catch (error) {
        this.showError = true;
        this.errorText = "Error signing in.";
        this.isLoading = false;
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>