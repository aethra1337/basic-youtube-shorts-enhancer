document.addEventListener('DOMContentLoaded', function() {
  var volumeSlider = document.getElementById('volume-slider');
  var seekSlider = document.getElementById('seek-slider');

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: "getVolume"}, function(response) {
      volumeSlider.value = response.volume;
    });

    chrome.tabs.sendMessage(tabs[0].id, {type: "getSeek"}, function(response) {
      seekSlider.value = response.seek;
    });
  });

  volumeSlider.addEventListener('input', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {type: "setVolume", volume: volumeSlider.value});
    });
  });

  seekSlider.addEventListener('input', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {type: "setSeek", seek: seekSlider.value});
    });
  });
});