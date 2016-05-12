(function () {
    var app = angular.module('tigerSpike');
    app.controller('FlickrFeedController', ['dataFactory', '$scope', function (dataFactory, $scope) {
        var ctrl = this;
        this.flickrFeed = [];
        $scope.loadFlickrFeed = loadFlickrFeed;
        $scope.search = "";
        $scope.searchFlickr = searchFlickr;
        this.flickrFeedTags = [[]];

        function loadFlickrFeed() {
            dataFactory.getFlickrPublicFeedJson($scope.search)
                .then(function(data) {
                    ctrl.flickrFeed = data;
                    for (var i = 0; i < ctrl.flickrFeed.items.length; i++) {

                        ctrl.flickrFeed.items[i].flickrFeedTags = ctrl.flickrFeed.items[i].tags.split(' ');
                    }
                    console.log(ctrl.flickrFeed);
                    console.log(ctrl.flickrFeedTags);
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

