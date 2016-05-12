(function () {
    var app = angular.module('tigerSpike');
    app.factory('dataFactory', ['$resource', function ($resource) {
        var dataService = {
            getFlickrPublicFeedJson: getFlickrPublicFeedJsonPromise
        };

        function getFlickrPublicFeedJsonPromise(imageTags) {
            var feed = $resource('http://api.flickr.com/services/feeds/photos_public.gne',
                { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'getJson': { 'method': 'JSONP' } });

            return feed.getJson({ tags: imageTags })
                .$promise.then(function (result) {
                    return result;
                });
        }

        return dataService;
    }]);
})();