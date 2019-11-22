require("dotenv").config();

const keys = require("./keys");

console.log(keys);

const spotify = new Spotify(keys.spotify);

