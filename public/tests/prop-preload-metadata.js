({
  description: 'Property "preload" with value "metadata" (+does not keep on buffering)',
  assert: function(finish) {
    var audio = this.audio = new Audio();

    audio.addEventListener('loadedmetadata', function() {
      setTimeout(function() {
        audio.addEventListener('progress', function progress() {
          audio.removeEventListener('progress', progress, false);
          finish(false);
        }, false);

        setTimeout(function() {
          finish(true);
        }, 500);
      }, 5000);
    }, false);

    audio.setAttribute('preload', 'metadata');
    audio.setAttribute('src', AWPY.sound.long.stream_url());
  }
});
