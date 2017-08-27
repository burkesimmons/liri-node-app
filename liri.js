var Twitter = require('twitter');
 
var twitterKeys = require('./keys.js');

var client = new Twitter(twitterKeys.twitterKeys);

var grabTweets = function(){

	var params = {screen_name: 'burkemsimmons', count: '20'};
	
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			for (var i = 0; i < tweets.length; i++) {
				console.log(tweets[i].created_at);
				console.log(tweets[i].text);
				console.log('=====================');
			}
		}
	});
};

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
		id: '6a887795fc8045b68d94776fa8afdf5a',
		secret: '7baa7fd87b654c83a98325d930fa9195'
	});

var song = '';
song = process.argv[3];

var grabSpotify = function(){
	if(song == null){
		song = 'The Sign Ace of Base';
		spotifyMe();
	} else {
		spotifyMe();
	};
};

var spotifyMe = function(){
	spotify.search({ type: 'track', query: song }, function(err, data) {
		if (err) {
		return console.log('Error occurred: ' + err);
		}

	var currentSong = data.tracks.items[0];

	console.log("Artist: " + currentSong.artists[0].name);
	console.log("Song title: " + currentSong.name);
	console.log("Url: " + currentSong.external_urls.spotify);
	console.log("Album Name: " + currentSong.album.name);
	});
}

var request = require("request");

// Create an empty variable for holding the movie name
var movieName = '';
movieName = process.argv[3]

var grabOMDB = function() {
	if(movieName == null){
		movieName = 'Mr. Nobody';
		movieMe();
	} else {
		movieMe();
	}
};

var movieMe = function(){
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

	request(queryUrl, function(error, response, body) {

	  // If the request is successful
		if (!error && response.statusCode === 200) {

			console.log("Title: " + JSON.parse(body).Title);
			console.log("Release Year: " + JSON.parse(body).Year);
			console.log(JSON.parse(body).Ratings[0].Source + " Rating: " + JSON.parse(body).Ratings[0].Value);
			console.log(JSON.parse(body).Ratings[1].Source + " Rating: " + JSON.parse(body).Ratings[1].Value);
			console.log("Country: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
		}
	});
}

// fs is a core Node package for reading and writing files
var fs = require("fs");

var doWhat = function(){
	fs.readFile("random.txt", "utf8", function(error, data) {

		if (error) {
		return console.log(error);
		}

		var dataArr = data.split(",");
		song = dataArr[1];

		grabSpotify();

	});
};

var action = process.argv[2];

if(action === 'my-tweets'){
	grabTweets();
} else if(action === 'spotify-this-song'){
	grabSpotify();
} else if(action === 'movie-this'){
	grabOMDB();
} else if(action === 'do-what-it-says'){
	doWhat();
};