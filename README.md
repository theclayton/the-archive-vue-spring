# The Archive Vue
#### Vue front end for accessing a Spring Boot Web backend

~~Check it out by [visiting the live site here](https://archive.flaresoftware.com/).~~

This repository contains the frontend source for the Archive Vue. I developed it 
using Vue 2 along with Vuetify, Vue router, and Vuex. It is designed with a 
beautiful dark theme, including skeleton loaders, graphical charts created with 
D3, and modern UI components. 

The site contains an admin panel for quickly and easily creating, editing and 
deleting projects. These back end endpoints are protected with basic authentication.

The [backend](https://github.com/theclayton/archive-spring) was creating using Java with the Spring Boot framework along with Spring Web, Data and 
Security. I used JDBC to connect to a MySQL database containing data for the projects,
tehcnologies, users, etc. Graphics are pulled from an AWS S3 Bucket. An image uploading 
functionality may be added in the future. The repository for the back end is currently private.

Thank you for viewing The Archive!
