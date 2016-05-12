(function () {
    var app = angular.module('tigerSpike');
    app.controller('FlickrFeedController', [ 'dataFactory', '$scope', function ( dataFactory, $scope) {
        var ctrl = this;
        this.flickrFeed = [];
        $scope.test = "test";
        $scope.init = init;
        this.test2 = "test2";
        function init() {
            dataFactory.getFlickrPublicFeedJson()
                .then(function(data) {
                    ctrl.flickrFeed = data;
                });
        }

    }]);
})();

