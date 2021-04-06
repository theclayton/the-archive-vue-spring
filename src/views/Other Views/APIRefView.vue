<template>
  <div>
    <v-card color="dark" class="mx-5 mb-5">
      <v-container class="pb-15">
        <h1 class="text-h3 light--text font-weight-light text-center pt-10 pb-8">REST API Reference</h1>

        <div v-for="section in api" :key="section.sectionName" class="px-10 py-5">
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
    mounted() {
    window.scrollTo(0,0)
  },
  data: () => ({
    api: [
      {
        sectionName: "Projects",
        sectionDescription:
          "It is possible to create, modify, and delete projects. Featured projects are displayed based on the selection made by an admin user. The top ten most recent projects appear on the side bar to the left.",
        endpoints: [
          {
            summary: "List all projects",
            method: "GET",
            endpoint: "/projects",
            description:
              "Result is an array of JSON objects containing all data for all projects found in database.",
          },
          {
            summary: "Get info for one project",
            method: "GET",
            endpoint: "/projects/:name",
            description:
              "Result is a JSON object containing all project information.",
          },
          {
            summary: "Create a blank project",
            method: "POST",
            endpoint: "/projects/create",
            description:
              "Result is a JSON object containing the project title from JSON in req.body and all other project information is set to null. Authentication and admin access is required via JWT.",
          },
          {
            summary: "Update project",
            method: "PUT",
            endpoint: "/projects",
            description:
              "Result is a JSON object containing the project information from JSON in req.body. Authentication and admin access is required via JWT.",
          },
          {
            summary: "Delete project",
            method: "DELETE",
            endpoint: "/projects/delete/:name",
            description:
              "Result is a JSON object containing a message. A message of success means the project was deleted. Authentication and admin access is required via JWT.",
          },
          {
            summary: "Get 10 most recent projects",
            method: "GET",
            endpoint: "/projects/recent/projects",
            description:
              "Result is a JSON object containing all project information for 8 most recent projects by date of development.",
          },
          {
            summary: "Get featured projects",
            method: "GET",
            endpoint: "/projects/featured/:type",
            description:
              "Result is a JSON object containing all project information for projects which featured field is set to the given parameter.",
          },
          {
            summary: "Create featured project list",
            method: "POST",
            endpoint: "/projects/featured/:type",
            description:
              "Result is a JSON object containing a message. A message of success means the project's featured field from req.body were set to the type specified in the given parameter. Authentication and admin access is required via JWT.",
          },
          {
            summary: "Get unique technologies",
            method: "GET",
            endpoint: "/projects/unique/technologies",
            description:
              "Result is a JSON object containing all the unique technologies found from all projects in database.",
          },
        ],
      },
      {
        sectionName: "Authentication",
        sectionDescription: "User login and Authentication endpoints.",
        endpoints: [
          {
            summary: "User login",
            method: "POST",
            endpoint: "/auth/login",
            description:
              "Result is a JSON object containing all data to log a user in and keep said user logged in. No authentication is required.",
          },
          {
            summary: "Get User info from JWT",
            method: "POST",
            endpoint: "/auth/login/getinfo",
            description:
              "Result contains all data to keep user logged in. This feature exists to speed up UX. Authentication is required by sending JWT in req.body.",
          },
        ],
      },
      {
        sectionName: "Search",
        sectionDescription: "How search queries for projects are handled.",
        endpoints: [
          {
            summary: "Search all projects",
            method: "GET",
            endpoint: "/search?terms=query",
            description:
              "Result is an array of JSON objects containing projects that match query parameter.",
          },
        ],
      },
      {
        sectionName: "Uploads",
        sectionDescription: "User login and Authentication endpoints.",
        endpoints: [
          {
            summary: "User login",
            method: "POST",
            endpoint: "/upload",
            description:
              "Result is a JSON object containing a message and filename of file on server from req.files form data. Authentication and admin access are required.",
          },
        ],
      },
      {
        sectionName: "Users",
        sectionDescription: "User login and Authentication endpoints.",
        endpoints: [
          {
            summary: "List all users",
            method: "GET",
            endpoint: "/users",
            description:
              "Result is a JSON object containing all registered user data. Authentication and admin access are required.",
          },
          {
            summary: "Create user",
            method: "POST",
            endpoint: "/users/create",
            description:
              "Result is a JSON object containing a message. A success message indicates that the user was successfully created from req.body JSON data. Authentication and admin access are required.",
          },
          {
            summary: "Modify user",
            method: "PUT",
            endpoint: "/users",
            description:
              "Result is a JSON object containing a message. A success message indicates that the user was successfully updated from req.body JSON data. Authentication and admin access are required.",
          },
          {
            summary: "Change account password",
            method: "PUT",
            endpoint: "/users/change-password",
            description:
              "Result is a JSON object containing a message. A success message indicates that the password was successfully updated from req.body JSON data. Authentication and admin access are required.",
          },
          {
            summary: "Delete user account",
            method: "DELETE",
            endpoint: "/users/:email",
            description:
              "Result is a JSON object containing a message. A success message indicates that the user was successfully updated from req.body JSON data. Authentication and admin access are required.",
          },
        ],
      },
    ],
  }),
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