<template>

    <!-- Main container -->
    <div class="flex justify-center items-center min-h-screen bg-gray-100">

        <!-- Weather container -->
        <div class="weather-container max-w-lg w-full bg-white shadow-lg rounded-lg p-6">

            <!-- App name -->
            <h1 class="flex justify-center mb-12 font-serif font-extrabold underline uppercase">Weather App</h1>

        
            <!-- Input section for entering the city -->
            <div class="input-section flex justify-center mb-4">

                <input v-model="city" class="city-input h-10 border border-gray-300 rounded-lg p-2 flex-grow mr-4" placeholder="Enter city"/>

                <!-- Button to trigger getWeather function -->
                <button class="get-weather-button bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600" @click="getWeather()">

                    Get Weather

                </button>

            </div>
  
            <!-- Loading section displayed while fetching data -->
            <div v-if="loading" class="loading-section flex justify-center mt-4">

                <p class="loading-text text-blue-500">Loading... <span class="loading-subtext font-serif ml-2">resources from weatherbit.io</span></p>

            </div>
    
            <!-- Weather information displayed after data is fetched -->
            <div v-if="!loading" class="weather-info mt-4 font-serif">

                <!-- Display city name if available -->
                <h2 v-if="city_name !== ''" class="info-item text-xl font-semibold mb-2">City Name: <span class="ml-4">{{ city_name }}</span></h2>

                <!-- Display weather description if available -->
                <p v-if="weather_description !== ''" class="info-item text-lg mb-2">Weather Description: <span class="ml-4">{{ weather_description }}</span></p>

                <!-- Display temperature if available -->
                <p v-if="temperature !== ''" class="info-item text-lg">Temperature: <span class="ml-4">{{ temperature }} °C</span></p>

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
                const response = await axios.get(`https://api.weatherbit.io/v2.0/current?city=${this.city}&key=${API_KEY}`);

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

        },

    }

};

</script>
