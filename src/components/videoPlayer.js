angular.module('video-player')
  .controller('VideoPlayerCtrl', function() {

    this.modifyURL = () => {
    //return "https://www.youtube.com/embed/OPxeCiy0RdY";
      return this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : '';
    };
  })
  .component('videoPlayer', {
    controller: 'VideoPlayerCtrl',
    bindings: {
      video: '<'
    },

    template:
  `
  <div class="video-player loading" ng-if="!$ctrl.video">Please wait...</div>
  <div class="video-player" ng-if="$ctrl.video">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" ng-src="{{$ctrl.modifyURL()}}" allowFullScreen></iframe>
    </div>
    <div class="video-player-details">
      <h3>{{$ctrl.video.snippet.title}}</h3>
      <div>{{$ctrl.video.snippet.description}}</div>
    </div>
  </div>

  `
  });
