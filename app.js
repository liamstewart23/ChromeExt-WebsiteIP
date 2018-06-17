document.addEventListener('DOMContentLoaded', function() {

  chrome.tabs.query({
    'active': true,
    'lastFocusedWindow': true
  }, function(tabs) {

    let url = tabs[0].url; //Get current url
    let parser = document.createElement('a');
    parser.href = url;
    let urlFetch = 'http://ip-api.com/json/' + parser.hostname; //url to fetch

    fetch(urlFetch)
      .then(res => res.json())
      .then((output) => {
        document.body.innerHTML = output.query;
      })
      .catch(err => {
        document.body.innerHTML = ':(';
      });

  });

}, false);