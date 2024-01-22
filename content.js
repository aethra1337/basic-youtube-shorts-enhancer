chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "getVolume") {
    var volume = document.querySelector("video").volume;
    sendResponse({volume: volume});
  } else if (request.type === "getSeek") {
    var seek = document.querySelector("video").currentTime / document.querySelector("video").duration * 100;
    sendResponse({seek: seek});
  } else if (request.type === "setVolume") {
    document.querySelector("video").volume = request.volume;
  } else if (request.type === "setSeek") {
    var duration = document.querySelector("video").duration;
    document.querySelector("video").currentTime = request.seek / 100 * duration;
  }
});