// RUNS SERVER  
//Linking stuff that we are using 

var express = require('express')
   ,request = require('request');

var mysql = require('./config/mysql.js');
var post = require('./modules/Post.js');
var hashtag = require('./modules/Hashtag.js');
var user = require('./modules/User.js');
var async = require('async');


//var report = require('./modules/report.js');


var app = express();                               // express is a thing in node that runs your app 
// configure Express
app.use(express.static(__dirname + '/'));         // linking all of your files there - in the folder 

// Allow Angular to be able to post data to our API - added after error "No 'Access-Control-Allow-Origin' header is present on the requested resource."
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.listen(3000);                                 // port number (you can put any port in)
console.log("Running at Port 3000");


// mysql.conn.query('select * from Instagram.posts', function(err, res) {
//   console.log(res)
// })


function getUser(user_id, cb) {
	user.getUser(user_id, function(err, res) {
		if (res) {
			cb(null, res);
		} else {
			user.getUserFromIG(user_id, function(err, res) {
				if (err) {
					cb(err, null);
				} else {
					user.insertUser(res, function(err, res) {
    					if (err) {
    						console.log(err);
    						cb(err, null);
    					} else {
                user.getUser(user_id, function(err, res) {
    							if (err) {
    								console.log(err);
    								cb(err, null);
    							} else {
    								cb(null, res);
    							}
    						})
    					}
					})
				}
				
			})
		}
	})
};

function control(media, final_cb) {
	async.waterfall([
	    function(callback) {
	    	getUser(media.user.id, function(err, user) {
	    		if (err) {
            callback(err, null);
	    			console.log(err);
	    		} else {
	    			callback(null, user);
	    		}	
	    	})	        
	    },
	    function(user, callback) {
	      	post.insertPost(media, user, function(err, res) {
	      		if (err) {
              callback(err, null);
	      			console.log(err);
	      		} else {
	      			callback(null);
	      		}
	      	})
	    },
	    function(callback) {
	    	hashtag.hashtagInit(media, function(err, hashtag) {
	    		if (err) {
            callback(err, null);
	      			console.log(err);
	      		} else {
	      			callback(null, hashtag);
	      		}
	    	})
	    }
	], function (err, result) {
	    final_cb(err, result);
	});

}
function postsInit() {


  // post.getPostsFromIG(function(err, res){
  //   if (err) {
  //   	console.log("ERROR");
  //   } else {
  //   	console.log(res);
  var res = posts;

  post.getPostsByLocations(function(err, res){
    if (err) {
    	console.log("ERROR");
    } else {
    	for (var i = 0; i < res.length; i++) {
    		if (res[i].tags.length > 0) {
    			control(res[i], function(err, res) {
            if (err) {
              console.log(err)
              throw err
            }
    			})
    		}
        else {
          console.log('no tags')
        }
      }
    }
  })

  // post.getPostsFromIG(function(err, res){
  //   if (err) {
  //   	console.log("ERROR");
  //   } else {
  //   	for (var i = 0; i < res.length; i++) {
  //   		if (res[i].tags.length > 0) {
  //   			control(res[i], function(err, res) {
  //           if (err) {
  //             console.log(err)
  //             throw err
  //           }
  //   			})
  //   		}
  //       else {
  //         console.log('no tags')
  //       }
    		
  //   	}

  //   }
  // })



}

//postsInit();
