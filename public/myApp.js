// RUNS ANGULAR 

var myApp = angular.module('myApp', [    // myApp - you can do whatever you want but 
										//var anything = angular.module('HERE HAS TO BE SAME AS IN INDEX.HTML'
		

    // ANGULAR LIBRARIES										
	'ui.router',  // This helps you to control different states and routers below  - router is /something 
	'ui.bootstrap'  // THIS IS DEPENDENCY INJECTION 

	]);


// setting up routers USING Angular library ui.router 
// $stateProvider & urlRouterProvider- comes from ui.router - need to inject here so you can use it in order to set up routers 

// BLOCKS : myApp.config(...)  & .run(...)

myApp.config(function($stateProvider, $urlRouterProvider) {   // define routers

	$urlRouterProvider.otherwise("/me");

	$stateProvider


// url = real url  templateUrl = path to html file

		.state('home', { // home/main.ctrl.js - controller here 
			url: "/me", templateUrl: 'public/home/home.html', controller: 'Home' //activate controler called home (main.ctrl.js) 
																				//replace ui-view in INDEX.HTML it will put home.html without reloading 
		})


		.state('instagram-hashtag', {
			url: "/instagram-hashtag", templateUrl: 'public/instagram-hashtag/main.html', controller: 'InstagramHashtag'
		});

})

// don't have to repeat myApp - can do just .run - implied 
.run(function($rootScope, $location, $window, $state) {  

	// when your app starts to run this is where we check 
	// if the person is authenticated - if not then redirect 

	// this happes right after someone goes on your website 
	

	
});


// controllers in another file - next 



