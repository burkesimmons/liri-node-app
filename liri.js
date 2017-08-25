var Twitter = require('twitter');
 
var twitterKeys = require('./keys.js');

// console.log(twitterKeys.twitterKeys);

var client = new Twitter(twitterKeys.twitterKeys);

// var client = new Twitter({
//   consumer_key: 'aYIw1qogFcAW1T1CAzP50D4Mc',
//   consumer_secret: 'Nnx9Qtq3yDmMlm8W45shAykKb0ekDrf8cGQXPra0VARGZAPXEZ',
//   access_token_key: '899010833543421952-7aL1GvKIBO8fjFhju8zgXVus4kmQd2E',
//   access_token_secret: 'gn45J0XezNk1eg5Fqgd7P81248DfpkINwMBnvw1Y2U2tx'
// });
 
var params = {screen_name: 'burkemsimmons', count: '20'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	for (var i = 0; i < tweets.length; i++) {
  		console.log(tweets[i].created_at);
  		console.log(tweets[i].text);
  		console.log('=====================');
  	}
    // console.log(tweets[0].created_at);
    // console.log(tweets[0].text);
    // console.log(tweets);
  }
});

// var action = process.argv[2];

// console.log('client.twitterKeys', client.twitterKeys);	

// function topTweets(){
// 	var grabTwenty = new Twitter(client.twitterKeys);
// 	grabTwenty.get('direct_messages/sent', function(error, tweets, response) {
//    		console.log(tweets);
//    		// console.log(response);
// 	});
// };

// topTweets();

// var Spotify = require('node-spotify-api');

// var spotify = new Spotify({
// 	  id: '6a887795fc8045b68d94776fa8afdf5a',
// 	  secret: '7baa7fd87b654c83a98325d930fa9195'
// 	});

// function grabSpotify(){

// 	spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
// 	  if (err) {
// 	    return console.log('Error occurred: ' + err);
// 	  }
	 
// 	console.log(data); 
// 	console.log(data.tracks.items[0]);
// 	});
// };

// 	// spotify
// 	//   .search({ type: 'track', query: 'All the Small Things' })
// 	//   .then(function(response) {
// 	//     console.log(response);
// 	//   })	
// 	//   .catch(function(err) {
// 	//     console.log(err);
// 	//   });
// };

// grabSpotify();

// if(action === 'my-tweets'){
// 	tweets();
// } else if(action === 'spotify-this-song'){
// 	grabSpotify();
// } else if(action === 'movie-this'){
// 	movie();
// } else(action === 'do-what-it-says'){
// 	do();
// };