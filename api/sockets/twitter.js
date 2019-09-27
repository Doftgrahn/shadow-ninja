var Twitter = require("node-tweet-stream");

const tw = new Twitter({
  consumer_key: "sQvLDYvkLi5C611bw2NVJkVwp",
  consumer_secret: "BIRrth8GJqeE1P8ZBjegPrPV1jjlpPfVWP9k1dMjRN3PVICUeK",
  access_token: "147571371-YYguZd3ln1Kzs9WjDjUi54Wl6HpwvI8qKcUNyMV7 ",
  access_token_secret: "oYoysf0bXVWSpd5SIXsNL58RBLz824Y9wGkQdjEwDPbkW",
  Host: 'api.twitter.com'

});

module.exports = io => {

  tw.track("gaming");

  tw.on("tweet", tweet => {
      console.log(tweet);
    io.emit("tweet", tweet);
  });


};
