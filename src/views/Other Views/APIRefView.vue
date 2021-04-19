<template>
  <div>
    <v-card color="dark" class="mx-5 mb-5">
      <v-container class="pb-15">
        <h1 class="text-h3 light--text font-weight-light text-center pt-10 pb-8">REST API Reference</h1>

        <v-divider dark></v-divider>
        <h1
          class="text-h5 lighter--text font-weight-light text-center pt-8 pb-4"
        >Base URL:<br>{{ baseURL }}</h1>

        <div v-for="section in api" :key="section.sectionName" class="py-5">
          <h1 class="text-h4 font-weight-light light--text pb-2">{{ section.sectionName }}</h1>
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left lighter--text">Method</th>
                  <th class="text-left lighter--text">Endpoint</th>
                  <th class="text-left lighter--text">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="endpoint in section.endpoints" :key="endpoint.endpoint">
                  <td :class="getColor(endpoint.method)">{{ endpoint.method }}</td>
                  <td class="light--text">{{ endpoint.endpoint }}</td>
                  <td class="light--text">{{ endpoint.description }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    api: require("../../assets/api-ref.json"),
  }),
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    baseURL: () => {
      if (process.env.NODE_ENV === "production") {
        return "https://archive-spring.herokuapp.com/api";
      } else {
        return "http://localhost:3500/api";
      }
    },
  },
  methods: {
    getColor(method) {
      if (method === "GET") {
        return "lightGreenColor";
      } else if (method === "POST") {
        return "lightBlueColor";
      } else if (method === "PUT") {
        return "lighterOrangeColor";
      } else if (method === "DELETE") {
        return "lightOrangeColor";
      }
    },
  },
};
</script>

<style scoped>
.lightGreenColor {
  color: #78af9f;
}
.lightBlueColor {
  color: #659cc8;
}
.lightOrangeColor {
  color: #d36e2d;
}
.lighterOrangeColor {
  color: #dda032;
}
</style>