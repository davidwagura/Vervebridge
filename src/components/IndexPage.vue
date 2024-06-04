<template>

    <div class="border m-40 h-72 pt-8 mt-0 ">

        <div class="flex justify-center">

            <input v-model="city" class="h-10 mr-8 border-gray-500 shadow-xl p-2" placeholder="Enter city" />

            <button class="bg-blue-400 rounded-lg p-2" @click="getWeather">Get Weather</button>

        </div>

        <div v-if="loading" class="flex justify-center mt-4">

            <p>Loading...</p>

        </div>

        <div v-if="!loading" class="mt-4 ml-12">

            <h2 v-if="city_name !== ''" class="m-4">City Name: <span class="ml-4">{{ city_name }}</span></h2>

            <p v-if="weather_description !== ''" class="m-4">Weather description: <span class="ml-4">{{ weather_description }}</span></p> 

            <p v-if="temperature !== ''" class="m-4">Temperature: <span class="ml-4">{{ temperature }} °C</span></p> 

        </div>

    </div>

</template>

  
<script>
import axios from 'axios';

export default {

    data() {

        return {

            city: '',

            loading: false,

            city_name: '',

            weather_description: '',

            temperature: ''

        };

    },

    methods: {

        async getWeather() {

            this.loading = true;

            const API_KEY = '11f996f9c0db43e384a159067612f13c';

            try {

                const response = await axios.get(`https://api.weatherbit.io/v2.0/current?city=${this.city}&key=${API_KEY}`);

                this.city_name = response.data.data[0].city_name;

                this.weather_description = response.data.data[0].weather.description;

                this.temperature = response.data.data[0].temp;

            } catch (error) {

                console.error('Error fetching weather data:', error);

            } finally {

                this.loading = false;
            }

        },

    }

};

</script>
