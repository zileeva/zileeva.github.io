'use strict'; //? 

myApp.factory('insta', function ($http, $rootScope, mapG) { 

	return {
		getPopularPosts: function(access_token, cb) {

			var url = "https://api.instagram.com/v1/media/popular?access_token=" + access_token + "&callback=JSON_CALLBACK";

			$http.jsonp(url)
			.success(function (data) {
				cb(null, data);

			})
			.error(function(data, error){
				console.log("Error getting Instagram popular posts", data, error);
				cb("Error getting Instagram popular posts", data);
			}) 



		},

		getPostsByLocation: function(api_key, location, access_token, cb) {

			mapG.getLocationInfo(api_key, location, function(err, data) {
				if (data) {
					var options = {distance: 5000};
					var lat = data.geometry.location.lat;
					var lng = data.geometry.location.lng;
					var max_timestamp = Math.floor(Date.now() / 1000) - 3600;
					var min_timestamp = Math.floor(Date.now() / 1000) - 3*3600;
					var formatted_address = data.formatted_address;
					var url = "https://api.instagram.com/v1/media/search?lat=" + lat + "&lng=" + lng + "&max_timestamp=" + max_timestamp + "&min_timestamp=" + min_timestamp + "&distance=5000&access_token=" + access_token + "&callback=JSON_CALLBACK";
					$http.jsonp(url)
					.success(function (data) {
						data.formatted_address = formatted_address;
						cb(null, data);

					})
					.error(function(data, error){
						console.log("Error getting Instagram posts by location: ", location, data, error);
						cb("Error getting Instagram posts by location", data);
					}) 
				}
			})

		},


		getUserInformation: function(access_token, user_id, cb){

			var url = "https://api.instagram.com/v1/users/" + user_id + "/?access_token=" + access_token + "&callback=JSON_CALLBACK";

			$http.jsonp(url)
			.success(function (data) {
				console.log(data)
				cb(null, data.data);

			})
			.error(function(data, error){
				console.log("Error getting Instagram User Information", data, error);
				cb("Error getting Instagram User Information", data);
			}) 
		}

	}
	
})
