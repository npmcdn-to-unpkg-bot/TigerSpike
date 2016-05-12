(function () {
    var app = angular.module('tigerSpike');
    app.controller('FlickrFeedController', ['dataFactory', '$scope', function (dataFactory, $scope) {
        var ctrl = this;
        this.flickrFeed = [];
        this.loadFlickrFeed = loadFlickrFeed;
        this.search = "";
        this.searchFlickr = searchFlickr;
        this.clickTags = clickTags;
        this.flickrFeedTags = [[]];

        function loadFlickrFeed() {
            dataFactory.getFlickrPublicFeedJson($scope.search)
                .then(function (data) {
                    ctrl.flickrFeed = data;
                });
        }

        function searchFlickr(search) {
            console.log($scope.search);
            console.log(ctrl.search);

            dataFactory.getFlickrPublicFeedJson($scope.search)
            .then(function (data) {
                ctrl.flickrFeed = data;
            });
        }


        function clickTags(search) {
            console.log($scope.search);
            console.log(ctrl.search);

            $scope.search = search;
            dataFactory.getFlickrPublicFeedJson($scope.search)
            .then(function (data) {
                ctrl.flickrFeed = data;
            });
        }
    }]);
})();

