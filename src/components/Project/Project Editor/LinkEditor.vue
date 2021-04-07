<template>
  <div>
    <v-row class="ml-1">
      <h4 class="text-h6 font-weight-light light--text">Project Links:</h4>
    </v-row>

    <v-chip
      class="mt-6 mb-4 mr-4 lighter--text"
      color="darker"
      v-for="l, i in links"
      :key="i"
      close
      @click="openLink(l.url)"
      @click:close="removelink(l._id, i)"
      dark
    >{{ l.name }}</v-chip>

    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mt-3" small fab dark v-bind="attrs" v-on="on" color="lightBlue">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template>

      <v-card dark class="pt-4 px-8 pb-8">
        <v-card-title class="light--text">Create a new link</v-card-title>
        <v-row justify-sm="center">
          <v-col sm="11">
            <v-text-field
              v-model="newLinkName"
              label="Link Name"
              placeholder="Link Name"
              :disabled="isLoading"
              outlined
              rounded
              clearable
              required
              dark
            ></v-text-field>

            <v-text-field
              v-model="newLinkUrl"
              label="Link URL"
              placeholder="Link URL"
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
              @click="createLink()"
            >CREATE</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "../../../axios/axios";

export default {
  data: () => ({
    projectID: -1,
    newLinkName: "",
    newLinkUrl: "",
    isLoading: false,
    links: [],
    dialog: false,
  }),
  mounted() {
    this.projectID = this.$route.params.id;

    this.getLinks();
  },
  methods: {
    async getLinks() {
      try {
        const res = await axios.get(`/links/project/${this.projectID}`);
        this.links = res.data;
      } catch (error) {
        // pass
      }
    },
    async createLink() {

    },
    async removelink(id, index) {
      console.log(id + index)
    },
    openLink(url) {
      window.open(url, '_blank');
    }
  },
};
</script>

<style>
</style>