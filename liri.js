require("dotenv").config();

const keys = require("./keys");
const axios = require('axios');

// console.log(keys);

// const spotify = new Spotify(keys.spotify);

const url = "https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp";

axios.get(url).then(res => console.log(res.data[0].venue.name));