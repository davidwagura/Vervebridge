<template>

    <div class="border m-40 h-72 pt-8 mt-0 ">

        {{ data }}

        <div class="flex justify-center">

            <input v-model="city" class="h-10 mr-8 border-gray-500 shadow-xl p-2" placeholder="Enter city" />

            <button class="bg-blue-400 rounded-lg p-2" @click="getWeather()">Get Weather</button> <br>

        </div>

        <div v-if="weather" class="mt-4 ml-72">

            <h2 class="m-4 ml-12">City Name: <span class="ml-6">{{ weather.city_name }}</span></h2>

            <p class="m-4 ml-12">Weather description: <span class="ml-6">{{ weather.weather.description }}</span></p> 

            <p class="m-4 ml-12">Temperature: <span class="ml-6">{{ weather.temp }} °C</span></p> 

        </div>

    </div>

</template>

  
<script>
import axios from 'axios';

export default {

    data() {

        return {

            city: '',

            weather: null,

            data: {}

        };

    },

    methods: {

        async getWeather() {

            const API_KEY = '11f996f9c0db43e384a159067612f13c';

            axios.get(`https://api.weatherbit.io/v2.0/current?&city=${this.city}&key=${API_KEY}`)

            .then(response => {

                this.data = response.data.data;

            });

        },

    }

};

</script>
  