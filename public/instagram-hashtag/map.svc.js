'use strict'; 
myApp.factory('mapG', function ($http, $rootScope) {
	return {

		getLocationInfo: function(api_key, loc,  cb) {
			var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + loc + "&key=" + api_key;
			console.log(url)
			$http.get(url)
			.success(function(res){
			    console.log(res.results[0]);
			    cb(null, res.results[0])
			})
			.error(function(err, res) {
				console.log("Error while getting location information ", err);
				cb("Error while getting location information ", res)
			})

		}
	}
	
})
