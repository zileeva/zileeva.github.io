myApp.controller('Home', ['$scope', function($scope) {
	console.log("Home controller is activated");
	
	$('#content-me').css({'opacity': '0.7'})
	$('#desc-me').css({'opacity': '1'})

	var contents = ['content-g', 'content-y', 'content-b']

	$scope.addOpacity = function(id, id2) {
		$('#content-me').css({'opacity': '0'})
		$('#desc-me').css({'opacity': '0'})

		for (var i = 0; i < contents.length; i++) {
			var hidden = $('.' + contents[i]);
		    hidden.animate({"right":"-1000px"}, 200, $.bez([0,0,0.6,1])).removeClass('visible');
		}

		var show = $('.' + id);
		show.animate({"right":"0px"}, 200, $.bez([0,0,0.6,1])).addClass('visible');

		$('#' + id).css({'opacity': '0.7'})
		$('#' + id2).css({'opacity': '1'})
	}

	$scope.removeOpacity = function(id, id2) {
		$('#' + id).css({'opacity': '0'})
		$('#' + id2).css({'opacity': '0'})


		var hidden = $('.' + id);
		hidden.animate({"right":"-1000px"}, 500, $.bez([0,0,0.6,1])).removeClass('visible');
	}

	$scope.toggle = function(id, id2) {
		$('#' + id).css({'opacity': '0.7'})
		$('#' + id2).css({'opacity': '1'})
	}
}])