(function () {
    var app = angular.module('tigerSpike');
    app.controller('FlickrFeedController', ['dataFactory', '$scope', function (dataFactory, $scope) {
        var ctrl = this;
        this.flickrFeed = [];
        $scope.loadFlickrFeed = loadFlickrFeed;
        $scope.search = "";
        $scope.searchFlickr = searchFlickr;
        this.flickrFeedTags = {};

        this.test2 = "test2";
        function loadFlickrFeed() {
            dataFactory.getFlickrPublicFeedJson($scope.search)
                .then(function(data) {
                    ctrl.flickrFeed = data;
                    for (var i = 0; i < ctrl.length; i++) {
                        ctrl.flickrFeedTags.push(ctrl.flickrFeed[i].tags.split(' ')[0]);
                    }
                    console.log(ctrl.flickrFeed);
                    console.log($scope.flickrFeedTags);
        });

        }

        function searchFlickr(tag) {
            $scope.search = tag;

            dataFactory.getFlickrPublicFeedJson($scope.search)
            .then(function (data) {
                ctrl.flickrFeed = data;
            });
        }

    }]);
})();

