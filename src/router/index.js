import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminPanelView from '../views/Admin Management Views/AdminPanelView.vue'

import APIRefView from '../views/Other Views/APIRefView.vue'
import LoginView from '../views/Other Views/LoginView.vue'

import AllProjectsView from '../views/Project Views/AllProjectsView.vue'
import FeaturedView from '../views/Project Views/FeaturedView.vue'
import ProjectEditorView from '../views/Project Views/ProjectEditorView.vue'
import ProjectView from '../views/Project Views/ProjectView.vue'
import SearchView from '../views/Project Views/SearchView.vue'


Vue.use(VueRouter)

// Ordered by 'views' file structure
const routes = [
  {
    path: '/admin-panel',
    name: 'Admin Panel',
    component: AdminPanelView,
    exact: true
  },
  {
    path: '/api',
    name: 'API Ref',
    component: APIRefView,
    exact: true
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    exact: true
  },
  {
    path: '/projects',
    name: 'All Projects',
    component: AllProjectsView,
    exact: true
  },
  {
    path: '/',
    name: 'Home',
    component: FeaturedView,
    exact: true
  },
  {
    path: '/feature',
    name: 'Featured',
    component: FeaturedView,
    exact: true
  },
  {
    path: '/edit/project/:name',
    name: 'Edit Project',
    component: ProjectEditorView,
    props: true
  },
  {
    path: '/project/:name',
    name: 'Project View',
    component: ProjectView,
    props: true
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
