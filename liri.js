var keys = require("./keys.js");



function twitter() {
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.a
});


 
var params = {screen_name: 'ColossalJerk50',count:20};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

} //End Twitter 

