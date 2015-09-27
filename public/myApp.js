var myApp = angular.module('myApp', [
	'ui.router',
	'ui.bootstrap'

	]);


myApp.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('instagram-hashtag', {
			url: "/instagram-hashtag", templateUrl: 'public/instagram-hashtag/main.html', controller: 'InstagramHashtag'
		});

})
.run(function($rootScope, $location, $window, $state) {
	
	
});

myApp.controller('InstagramHashtag', ['$scope', function($scope) {
	console.log("InstagramHashtag controller is activated")
}])



