myApp.controller('InstagramHashtag', ['$scope', 'insta', function($scope, insta) { 

var CLIENT_ID = '4f894332962643199b2ac32bdc31a996';
var CLIENT_SECRET = 'a3ec3e30761b4e5085a5221e58655418';

var ACCESS_TOKEN = '184921090.1fb234f.6bc144a5548842109377d0380ca607cd';

var G_API_KEY = 'AIzaSyBn66-94QFK_5MQXJy1zBewtYLzN8j3kyI'
$scope.popularImages = [];
$scope.city = "";


var posts = [];

$scope.hashtags = {};

$scope.displayedHashtags = [];

$scope.maxScore = 0;

$scope.high = function() {
	insta.getPopularPosts(ACCESS_TOKEN, function(err, response){
		if (response) {
			var popImages = [];
			angular.forEach(response.data.slice(0,5), function(value, key) {
		  		this.push(value.images.standard_resolution.url);

			}, popImages);

			$scope.popularImages = angular.copy(popImages);

			console.log(popImages);

		}
	}) 
 }

function sortHashtags() {
	$scope.maxScore = 0;
	angular.forEach($scope.hashtags, function(tag, key) {
		if (tag.score > $scope.maxScore) $scope.maxScore = tag.score;
	})
	angular.forEach($scope.hashtags, function(tag, key) {
		$scope.displayedHashtags.push({tag: key, score_style: Math.ceil((tag.score / $scope.maxScore) * 5), score: tag.score, count: tag.count, post_urls: tag.post_urls})
	})
	console.log($scope.maxScore)
	console.log($scope.displayedHashtags)
}
//$scope.testing = [{tag: 'mam', score: 5, count: 56}, {tag: 'jk', score: 675, count: 56}, {tag: 're', score: 7, count: 56}, {tag: 'aa', score: 15, count: 56}]
function updateHashtags(tags, post) {
	angular.forEach(tags, function(tag, key) {
		if (!($scope.hashtags.hasOwnProperty(tag))) {
			$scope.hashtags[tag] = {count: 0, score: 0, post_urls: []};
		}
	})

	angular.forEach(tags, function(tag, key) {
		$scope.hashtags[tag].score = scoreHashtag(tag, post);
		$scope.hashtags[tag].count = $scope.hashtags[tag].count + 1;
		$scope.hashtags[tag].post_urls.push({url: post.url, image: post.image})
	})
}

function insertPosts(data, cb) {
	angular.forEach(data, function(value, key) {

		if (value.tags.length > 0) {
			
			// insta.getUserInformation(ACCESS_TOKEN, value.user.id, function(err, response){
			// 	var followers = response.counts.followed_by;
		
				var post_score = (value.likes.count + 2 * value.comments.count) / value.tags.length // / followers
				var post = {"post_id": value.id, 
							"user_id": value.user.id,
							"url": value.link,
							"image": value.images.thumbnail.url,
							"likes_count": value.likes.count,
							"comments_count": value.comments.count,
							"tags": value.tags,
							"post_score": post_score}

				posts.push(post)

				updateHashtags(value.tags, post)

			//})

		} else {
			console.log("no tags :(")
		}

		if (key == data.length - 1) {
			cb()
		}
		
	})

}

function scoreHashtag (tag, post) {	
	var sumPostScore = $scope.hashtags[tag].score //* $scope.hashtags[tag].count; //b4 incrementing
	sumPostScore += post.post_score;
	return sumPostScore // / ($scope.hashtags[tag].count + 1);
};

function initCalculation(data) {
	insertPosts(data, function() {
		sortHashtags()
	});

	
}

$scope.calculate = function(location) {
	posts = []
	$scope.hashtags = {}
	$scope.displayedHashtags = []
	insta.getPostsByLocation(G_API_KEY, location, ACCESS_TOKEN, function(err, res) {
		if (res) {
			$scope.city = res.formatted_address;
			console.log($scope.city)
			initCalculation(res.data);
		}
	})
}

$("#locationEnter").keydown(function(event) {

	if(event.keyCode==13){
		$scope.calculate($scope.city)
	}
})

}])