<template>
  <!-- Main container -->
  <div class="flex justify-center items-center p-6 min-h-screen bg-gradient-to-b from-blue-200 to-blue-400">

    <!-- Weather container -->
    <div class="weather-container max-w-lg w-full bg-white rounded-lg shadow-xl p-8">

      <!-- App name -->
      <h1 class="text-3xl font-bold text-center mb-6">Weather App</h1>
        
      <!-- Input section for entering the city -->
      <div class="input-section flex flex-col md:flex-row items-center justify-center mb-8">

        <input v-model="city" class="city-input h-10 border border-gray-300 rounded-lg p-2 flex-grow mr-0 md:mr-4 mb-2 md:mb-0" placeholder="Enter city"/>

          <!-- Button to trigger getWeather function -->
        <button class="get-weather-button bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400" @click="getWeather()">
                        
          Get Weather

        </button>

      </div>
  
      <!-- Loading section displayed while fetching data -->
      <div v-if="loading" class="loading-section flex justify-center mt-4">

        <p class="loading-text text-blue-500">Loading... <span>From https://www.weatherbit.io/</span></p>

      </div>
  
      <!-- Weather information displayed after data is fetched -->
      <div v-if="!loading" class="weather-info mt-4 font-serif">

        <!-- Display city name if available -->
        <h2 v-if="city_name !== ''" class="info-item text-xl font-semibold mb-2">
          
          City: <span class="ml-2">{{ city_name }}</span>
        
        </h2>

        <!-- Display weather description if available -->
        <p v-if="weather_description !== ''" class="info-item text-lg mb-2">
          
          Weather: <span class="ml-2">{{ weather_description }}</span>
        
        </p>

        <!-- Display temperature if available -->
        <p v-if="temperature !== ''" class="info-item text-lg">
          
          Temperature: <span class="ml-2">{{ temperature }} °C</span>
        
        </p>

      </div>

    </div>

  </div>

</template>
  
<script>
import axios from 'axios';
  
  export default {
    // Here, we're defining the initial data for our component.
    data() {

      return {

        // This will hold the name of the city that the user enters.
        city: '',

        // This flag will tell us if we're currently loading weather data.
        loading: false,

        //This is where response data will be added
        city_name: '',

        weather_description: '',

        temperature: ''

      };

    },
  
    methods: {

      async getWeather() {

        // We set loading to true to let the user know we're fetching data.
        this.loading = true;

        //Instantiate a variable for the api key
        const API_KEY = '11f996f9c0db43e384a159067612f13c';
  
        try {

          // Make a GET request to the weather API with the city name and API key
          const response = await axios.get(

            `https://api.weatherbit.io/v2.0/current?city=${this.city}&key=${API_KEY}`

          );

          // If the request is successful, we update our component's data with the received weather data.
          this.city_name = response.data.data[0].city_name;

          this.weather_description = response.data.data[0].weather.description;

          this.temperature = response.data.data[0].temp;

        } catch (error) {

          // If an error occurs during the request, we log the error message.
          console.error('Error fetching weather data:', error);

        } finally {

          // Regardless of success or failure, we set loading back to false to indicate we're done fetching data.
          this.loading = false;

        }

      }

    }

  };

</script>
  
<style scoped>
  /* Add your custom styles */

  .weather-container {

    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);

  }

  .input-section input {

    width: 100%;

  }

  .get-weather-button {

    min-width: 120px;

  }

  .loading-text {

    font-weight: bold;

  }

  .weather-info .info-item {

    display: flex;

    align-items: center;

  }

  .weather-info .info-item span {

    font-weight: bold;

  }

</style>
  