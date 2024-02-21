// ********RoostGPT********
// Test generated by RoostGPT for test MiniProjects using AI Type Open AI and AI Model gpt-4-1106-preview

ROOST_TEST_HASH=getPlaceTrends_688d977ba6



// ********RoostGPT********
const Twitter = require('twitter');
const twitter = new Twitter({
  consumer_key: 'your-consumer-key',
  consumer_secret: 'your-consumer-secret',
  access_token_key: 'your-access-token-key',
  access_token_secret: 'your-access-token-secret'
});

function getPlaceTrends(woeid) {
  return twitter.get('trends/place', {
    id: woeid
  });
}

module.exports = getPlaceTrends;