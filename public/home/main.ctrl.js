// linked in index.html - NEEDS TO BE LINKED 

myApp.controller('Home', ['$scope', function($scope) {
	console.log("Home controller is activated");
	
	$('#content-me').css({'opacity': '0.7'})
	$('#desc-me').css({'opacity': '1'})

   $(".content-g").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 30);
    
      event.preventDefault();

   });

	$scope.addOpacity = function(id, id2) {
		$('#content-me').css({'opacity': '0'})
		$('#desc-me').css({'opacity': '0'})
		//$('.box').addClass("box-change");

		    var hidden = $('.' + id);
			    // if (hidden.hasClass('visible')){
			    //     hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
			    // } else {
			        hidden.animate({"right":"0px"}, 500, $.bez([0,0,0.6,1])).addClass('visible');
			    //}

		$('#' + id).css({'opacity': '0.7'})
		$('#' + id2).css({'opacity': '1'})
	}

	$scope.removeOpacity = function(id, id2) {
		//$('.box').removeClass("box-change");
		$('#' + id).css({'opacity': '0'})
		$('#' + id2).css({'opacity': '0'})


		 var hidden = $('.' + id);
			    // if (hidden.hasClass('visible')){
			    //     hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
			    // } else {
			        hidden.animate({"right":"-1000px"}, 500, $.bez([0,0,0.6,1])).removeClass('visible');
			    //}

	}

	$scope.toggle = function(id, id2) {
		$('#' + id).css({'opacity': '0.7'})
		$('#' + id2).css({'opacity': '1'})
	}
}])