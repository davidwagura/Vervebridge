// Importing the necessary functions from the 'vue-router' package to create a router instance
import { createRouter, createWebHistory } from 'vue-router'

// Importing the component that will be used for the '/' route
import IndexPage from '../components/IndexPage.vue'

// Defining the routes for the application
const routes = [

    { path: '/', component: IndexPage },

]

// Creating the router instance with the defined routes
const router = createRouter({

    history: createWebHistory(), // Specifies the history implementation to use

    routes, 
    
});

// Exporting the router instance to be used in the main application
export default router;
