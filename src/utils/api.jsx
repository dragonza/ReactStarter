var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';

var apiKey = '7e45aa30a375b73';

module.exports = {
  get(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization' : 'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      return response.json();
    })


  }
};