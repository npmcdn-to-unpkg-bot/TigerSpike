(function () {
    var app = angular.module('tigerSpike');
    app.controller('FlickrFeedController', ['dataFactory', '$scope', function (dataFactory, $scope) {
        var ctrl = this;
        this.flickrFeed = [];
        $scope.test = "test";
        $scope.loadFlickrFeed = loadFlickrFeed;
        $scope.search = "";

        this.test2 = "test2";
        function loadFlickrFeed() {
            dataFactory.getFlickrPublicFeedJson($scope.search)
                .then(function (data) {
                    ctrl.flickrFeed = data;
                    //$('.grid').masonry({
                    //    // options
                    //    itemSelector: '.grid-item',
                    //    percentagePosition: true
                    //});
                });

        }

    }]);
})();

