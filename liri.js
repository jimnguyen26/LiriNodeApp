require("dotenv").config();

const keys = require("./keys");
const axios = require('axios');
const moment = require('moment');
moment().format();

const showDate = moment().format();

// console.log(keys);

const movieTitle = require("./keys")
// const spotify = new Spotify(keys.spotify);

const url = `https://rest.bandsintown.com/artists/${movieTitle()}/events?app_id=codingbootcamp`;

axios.get(url).then(res => console.log(res.data[0].venue.name));
axios.get(url).then(res => console.log(res.data[0].venue.city));
axios.get(url).then(res => console.log(moment(res.data[0].datetime).format("MM-DD-YYYY")));