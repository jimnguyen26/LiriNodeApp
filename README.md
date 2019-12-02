Hello! Welcome to my Liri Node App where you can look up concert, song, and movie info from Terminal command line. We will be using Bands in Town Artist Events API to look up current concert information, looks up songs from Spotify API keys, and IMDB for movie information. This app uses the Switch Case to change which category you're going from.

To search for concert info, simply use your command line in Terminal and enter: 
- node liri.js concert-this "enter artist here" 

and name of venue, location, and date of the event will return.

To search for song info, enter in your command line: 
- node liri.js spotify-this-song "enter song title here" 

and artist, song title, preview link from Spotify, and which album that song is from will return. If an incorrect input was entered, the default output will be "The Sign" by Ace of Base.

To search for movie info, enter in the command line: 
- node liri.js movie-this "enter movie title here"

and title of movie, year film was released, IMDB rating, Rotten Tomatoes rating, country where film was produced, language it's in, plot of movie, and actors in the movie will return. Enter an incorrect movie title and 'Mr. Nobody' movie info will return.

Enter: 
- node liri.js do-what-it-says 

and a Spotify search for "I Want it That Way" will return as a default.

Dependancies with this app includes:
Axios (OMDB and Bands in Town API)
Node Spotify API
Moment
DotEnv
File System

// Could not figure out how to add screen shot images to the README.md page as examples.