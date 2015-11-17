$("#userForm").submit(function (event) {
	console.log("here")
	event.preventDefault();
	$("#user").modal('hide');

	$("#msgSent").show();

	//setTimeout(funtion() { $("#msgSent").hide(); }, 2000);
	setTimeout(function(){
  $("#msgSent").hide();
}, 3000);

})
$("#eventForm").submit(function (event) {
	event.preventDefault()

	var eventName = $("#eventForm #eventName").val();
	var dateTime = $("#eventForm #dateTime").val();
	var location = $("#eventForm #location").val();
	var description = $("#eventForm #description").val();

	var postTemplate = "<div class=\"col-lg-12 col-md-12\">" + 
                        "<div class=\"panel panel-event\">" +
                            "<div class=\"panel-heading\">" +
                                "<div class=\"row\">" +
                                    "<div class=\"col-xs-3\">" +
                                        "<i class=\"fa fa-calendar fa-5x\"></i>" +
                                    "</div>" +
                                    "<div class=\"col-xs-9 text-right\">   " +
                                        "<div class=\"huge\">" + eventName + "</div>" + 
                                        "<div class=\"event-info\"> <u>When</u>: " + dateTime + "</div>" +     
                                        "<div class=\"event-info\"> <u>Where</u>: " + location + "</div>" + 
                                        "<div><i>" + description + "</i></div>" + 
                                    "</div>" +


                                "</div>" +

                                "<div class=\"row\">" + 
                                        "<div class=\"col-xs-12\">" + 
                                            "<div class=\"pull-left poster\">" + 
                                              "  <u>Posted by you</u>" + 
                                           " </div>" + 
                                        "</div>" + 
                               " </div>" + 
                                    
                          "</div><a href=\"#\"><div class=\"panel-footer\"><span class=\"pull-left\">Add Comment</span><span class=\"pull-right\"><i class=\"fa fa-plus\"></i></span><div class=\"clearfix\"></div></div></a></div></div>";


	$("#createEvent").modal('hide');
	$("#feed").prepend(postTemplate);

	$("#eventForm #eventName").val("");
	$("#eventForm #dateTime").val("");
	$("#eventForm #location").val("");
	$("#eventForm #description").val("");

})

$("#postForm").submit(function (event) {
	event.preventDefault()

	var postName = $("#postForm #postName").val();
	var postContent = $("#postForm #postContent").val();


	var postTemplate = "<div class=\"col-lg-12 col-md-12\">" + 
                        "<div class=\"panel panel-post\">" +
                            "<div class=\"panel-heading\">" +
                                "<div class=\"row\">" +
                                    "<div class=\"col-xs-3\">" +
                                        "<i class=\"fa fa-pencil-square-o fa-5x\"></i>" +
                                    "</div>" +
                                    "<div class=\"col-xs-9 text-right\">   " +
                                        "<div class=\"huge\">" + postName + "</div>" +
                                        
                                        "<div>" +
                                            "<p>" + postContent + 
                                            "</p>" +
                                        "</div>" +

                                    "</div>" +


                                "</div>" +

                                "<div class=\"row\">" + 
                                        "<div class=\"col-xs-12\">" + 
                                            "<div class=\"pull-left poster\">" + 
                                              "  <u>Posted by you</u>" + 
                                           " </div>" + 
                                        "</div>" + 
                               " </div>" + 
                                    
                          "</div><a href=\"#\"><div class=\"panel-footer\"><span class=\"pull-left\">Add Comment</span><span class=\"pull-right\"><i class=\"fa fa-plus\"></i></span><div class=\"clearfix\"></div></div></a></div></div>";

	$("#writePost").modal('hide')
	$("#feed").prepend(postTemplate)

	$("#postForm #postName").val("");
	$("#postForm #postContent").val("");


})


$("#askForm").submit(function (event) {
	event.preventDefault()

	var askName = $("#askForm #askName").val();
	var askContent = $("#askForm #askContent").val();


	var postTemplate = "<div class=\"col-lg-12 col-md-12\">" + 
                        "<div class=\"panel panel-red\">" +
                            "<div class=\"panel-heading\">" +
                                "<div class=\"row\">" +
                                    "<div class=\"col-xs-3\">" +
                                        "<i class=\"fa fa-question fa-5x\"></i>" +
                                    "</div>" +
                                    "<div class=\"col-xs-9 text-right\">   " +
                                        "<div class=\"huge\">" + askName + "</div>" +
                                        
                                        "<div>" +
                                            "<p>" + askContent + 
                                            "</p>" +
                                        "</div>" +

                                    "</div>" +


                                "</div>" +

                                "<div class=\"row\">" + 
                                        "<div class=\"col-xs-12\">" + 
                                            "<div class=\"pull-left poster\">" + 
                                              "  <u>Posted by you</u>" + 
                                           " </div>" + 
                                        "</div>" + 
                               " </div>" + 
                                    
                          "</div><a href=\"#\"><div class=\"panel-footer\"><span class=\"pull-left\">Add Comment</span><span class=\"pull-right\"><i class=\"fa fa-plus\"></i></span><div class=\"clearfix\"></div></div></a></div></div>";

	$("#askAdvice").modal('hide');
	$("#feed").prepend(postTemplate);

	$("#askForm #askName").val("");
	$("#askForm #askContent").val("");


})