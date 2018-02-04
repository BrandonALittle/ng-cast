angular.module('video-player')
  .controller('SearchController', function() {
    this.handleClick = () => {
      this.service.search(this.input, (data) => {
        this.result(data);
      });
    };
  })
  .component('search', {
    controller: 'SearchController',
    bindings: {
      service: '<',
      result: '<'
    },
    template:
  `
  <div class="search-bar form-inline">
    <input class="form-control" type="text" ng-model="$ctrl.input"/>
    <button class="btn" ng-click="$ctrl.handleClick()">
      <span class="glyphicon glyphicon-search"></span>
    </button>
  </div>

  `
  });
