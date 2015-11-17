
var myApp = angular.module('myApp', [   
	'ui.router',  
	'ui.bootstrap'  

	]);

myApp.config(function($stateProvider, $urlRouterProvider) {  

	$urlRouterProvider.otherwise("/me");

	$stateProvider

		.state('home', { 
			url: "/me", templateUrl: 'public/home/home.html', controller: 'Home' 
		})
		.state('instagram-hashtag', {
			url: "/instagram-hashtag", templateUrl: 'public/instagram-hashtag/main.html', controller: 'InstagramHashtag'
		})
		.state('dda', {
			url: "/dda", templateUrl: "public/dda/index.html"
		})

})

.run(function($rootScope, $location, $window, $state) {  
	
});

