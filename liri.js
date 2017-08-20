var client = require('./keys.js');

function topTweets(){
	client.get('direct_messages/sent', function(error, tweets, response) {
   		console.log(tweets);
   		console.log(response);
	});
};

topTweets();

// console.log('----------------');
// console.log(keysSecrets);
// console.log('Twitter Consumer/Access Keys and Secrets');
// console.log('----------------');

// console.log('----------------');
// console.log(keysSecrets.twitterKeys.consumer_key);
// console.log('Consumer Key');
// console.log('----------------');

// var action = process.argv[2];

// if(action === 'my-tweets'){
// 	tweets();
// } else if(action === 'spotify-this-song'){
// 	spotify();
// } else if(action === 'movie-this'){
// 	movie();
// } else(action === 'do-what-it-says'){
// 	do();
// };