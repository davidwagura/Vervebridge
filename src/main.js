// Importing the 'createApp' function from the 'vue' package to create a new Vue application instance
import { createApp } from 'vue'

// Importing the root component of the application
import App from './App.vue'

// Importing the router instance that we defined in 'router/index.js'
import router from './router'

//import index.css

import './assets/main.css'

// Creating a new Vue application instance
const app = createApp(App)

// Installing the router instance 
app.use(router)

// This renders the application and attaches it to the DOM
app.mount('#app')
