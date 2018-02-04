angular.module('video-player')
  .controller('AppController', function(youTube) {

    this.searchService = youTube;
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };

    this.searchResults = (data) => { // take in a video results set
      this.videos = data;// set videos and currentvideo
      this.currentVideo = this.videos[0];
    };

    youTube.search('puppies', this.searchResults);
  })

  .component('app', {
    controller: 'AppController',
    template:
    `
    <div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search service="$ctrl.searchService" result="$ctrl.searchResults"/>
      </div>
    </nav>
    <div class="row">
      <div class="col-md-7">
        <video-player video="$ctrl.currentVideo"><h5><em>videoPlayer</em> component goes here</h5></video-player>
      </div>
      <div class="col-md-5">
        <video-list videos="$ctrl.videos" on-click="$ctrl.selectVideo"><h5><em>videoList</em> component goes here</h5></video-list>
      </div>
    <div>
  </div>
  `
  });
