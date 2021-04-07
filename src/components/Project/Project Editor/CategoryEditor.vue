<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" text dark v-bind="attrs" v-on="on" color="lightGreen">Create New</v-btn>
      </template>

      <v-card dark class="pt-4 px-8 pb-8">
        <v-card-title class="light--text">Create a new category</v-card-title>
        <v-row justify-sm="center">
          <v-col sm="11">
            <v-text-field
              v-model="newCategoryName"
              label="Category Name"
              placeholder="Category Name"
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
              @click="createCategory()"
            >CREATE</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from '../../../axios/axios';

export default {
  data: () => ({
    isLoading: false,
    newCategoryName: "",
    dialog: false
  }),
  methods: {
    async createCategory() {
      try {
        await axios.post('/categories/create', { name: this.newCategoryName })
      } catch (error) {
        // pass
      }
      this.dialog = false
    },
  },
};
</script>

<style>
</style>