angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    },


    template:
    `
    <ul class="video-list">
      <video-list-entry
        ng-repeat="video in $ctrl.videos"
        video="video"
        on-click="$ctrl.onClick"
      />
    </ul>
    `

  });

