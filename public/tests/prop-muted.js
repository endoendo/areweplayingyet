({
  description: 'Property "muted"',
  spec: 'http://dev.w3.org/html5/spec/Overview.html#dom-mediacontroller-muted',
  longdesc: '',
  assert: function(finish) {
    var audio = this.audio = new Audio();
    audio.addEventListener('loadedmetadata', function() {
      audio.muted = true;
      audio.addEventListener('timeupdate', function() {
        finish( audio.muted === true );
      }, false);
    }, false);

    audio.setAttribute('preload', 'metadata');
    audio.setAttribute('src', AWPY.sound.mini.stream_url());
  }
});