'use strict';

var Twitter = require('../lib/twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

client.get('saved_searches/list', {}, function(err, data){});
client.get('saved_searches/show/:id', {}, function(err, data){});
client.post('saved_searches/create', {}, function(err, data){});
client.post('saved_searches/destroy/:id', {}, function(err, data){});
