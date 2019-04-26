document.addEventListener('DOMContentLoaded', function() {

  chrome.tabs.query({
    'active': true,
    'lastFocusedWindow': true
  }, function(tabs) {

    let url = tabs[0].url; //Get current url
    let parser = document.createElement('a');
    parser.href = url;
    let urlFetch = 'http://ip-api.com/json/' + parser.hostname; //url to fetch

    let copyField = document.querySelector('#copyField');

    function copyToClipboard() {
        copyField.select();
        document.execCommand("copy");
    }

    fetch(urlFetch)
      .then(res => res.json())
      .then((output) => {
        copyField.value = output.query;
        document.addEventListener('click',copyToClipboard,false);
      })
      .catch(err => {
        console.log(err);
        document.body.innerHTML = ':(';
      });

  });

}, false);