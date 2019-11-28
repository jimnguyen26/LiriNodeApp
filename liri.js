require("dotenv").config();

const keys = require("./keys.js");
const axios = require('axios');
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const spotifyTest = process.env.SPOTIFY_ID
const moment = require('moment');
moment().format();


const category = process.argv[2]
const searchTitle = process.argv[3]

switch (category) {
    case "concert-this":
        searchForBands(searchTitle);
        break;
    case "spotify-this-song": 
        spotifySong(searchTitle);
        break;
    case "movie-this":
        movieSearch(searchTitle);
        break;
    case "do-what-it-says":
        doRandom();
    break;
}

function searchForBands(artist) {
    const queryUrl = `https://rest.bandsintown.com/artists/${(artist)}/events?app_id=codingbootcamp`;
    axios.get(queryUrl).then(
        (res => {
            if(res.data[0].venue !=  undefined) {
                console.log("Venue: " + res.data[0].venue.name);
                console.log("Location: " + res.data[0].venue.city);
                console.log(moment(res.data[0].datetime).format("MM-DD-YYYY"));
            }
            else {
                console.log("No results found.");
            }
        })
    ).catch(error => {
        console.log(error);
  });
}

function spotifySong(song) {
    spotify
    .search({ type: 'track', query: song })
    .then(res => {
        if (res.tracks.total === 0) {
            errorSpotify();
        } else {
            console.log("Artist: " + res.tracks.items[0].artists[0].name);
            console.log("Song Title: " + res.tracks.items[0].name);
            console.log("Spotify URL: " + res.tracks.items[0].preview_url);
            console.log("Album: " + res.tracks.items[0].album.name);
        }
    }).catch(error => {  
        console.log(error);
    });
}

function errorSpotify() {
    spotify
    .search({ type: 'track', query: 'The Sign' })
    .then(res => {
        for (var i=0;i < res.tracks.items.length; i++) {
            if (res.tracks.items[i].artists[0].name === "Ace of Base") {
                console.log("Artist: " + res.tracks.items[i].artists[0].name);
                console.log("Song Title: " + res.tracks.items[i].name);
                console.log("Spotify URL: " + res.tracks.items[i].preview_url);
                console.log("Album: " + res.tracks.items[i].album.name);
                i = res.tracks.items.length;
            }
        }
    }).catch(error => {  
        console.log(error);
    });
}

function movieSearch(movie) {
    axios.get(`http://www.omdbapi.com/?t=${(movie)}&y=&plot=short&tomatoes=true&apikey=trilogy`).then
        (res => {
            if (res.data.Title != undefined) {
                console.log("Title: " + res.data.Title);
                console.log("Year Released: " + res.data.Year);
                console.log("IMDB Rating: " + res.data.imdbRating);
                console.log("RottenTomatoes: " + res.data.tomatoRating);
                console.log("Country: " + res.data.Country);
                console.log("Language: " + res.data.Language);
                console.log("Plot: " + res.data.Plot);
                console.log("Actors: " + res.data.Actors);
            } 
            else {
                movieThis("Mr. Nobody");
            }
        }
    ).catch(error => {  
        console.log(error);
    });
}