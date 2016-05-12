(function () {
    var app = angular.module('tigerSpike');
    app.factory('dataFactory', ['$resource', '$filter', function ($resource, $filter) {

        var flickrKey = "792319f217b0e370511a0cc689443fc6";
        var flickrSecret = "981b82bba2f8d342";

        var dataService = {
            getFlickrPublicFeedJson: getFlickrPublicFeedJsonPromise
        };

        function getFlickrPublicFeedJsonPromise(imageTags) {
            var feed = $resource('http://api.flickr.com/services/feeds/photos_public.gne',
                { format: 'json', jsoncallback: 'JSON_CALLBACK',  }, { 'getJson': { 'method': 'JSONP' } });

            return feed.getJson({ tags: imageTags })
                .$promise.then(function (result) {
                    for (var i = 0; i < result.items.length; i++) {
                        result.items[i].titleFeedTags = result.items[i].title.split('#');
                        if (result.items[i].tags.length > 0) {
                            result.items[i].flickrFeedTags = result.items[i].tags.split(' ');
                        } else {
                            result.items[i].flickrFeedTags = [];
                        }
                        result.items[i].prettyDate = $filter("date")(result.items[i].date_taken);
                        result.items[i].author = result.items[i].author.split(" ")[1].replace("(", "").replace(")", "");
                    }
                    return result;
                });
        }

        return dataService;
    }]);
})();