var http = require('http');
var path        = require('path');
var settings    = require('./config/settings');
var environment = require('./config/environment');
var routes      = require('./config/routes');
var models      = require('./app/models/');

var express = require('express');

module.exports.start = function (done) {
  var app = express();

  environment(app);
  routes(app);
	
	app.configure(function() {
	  app.use(express.static(process.cwd() + "/generated"));
	  app.use(express.bodyParser());
	  app.use(express.static(__dirname+"/WebContent/stage1/"));
	});

  app.listen(settings.port, function () {
    console.log( ("Listening on port " + settings.port).green );

    if (done) {
      return done(null, app, server);
    }
  }).on('error', function (e) {
    if (e.code == 'EADDRINUSE') {
      console.log('Address in use. Is the server already running?'.red);
    }
    if (done) {
      return done(e);
    }
  });
}

/*var app = express();
 
app.configure(function() {
  app.use(express.static(process.cwd() + "/generated"));
  app.use(express.bodyParser());
  app.use(express.static(__dirname+"/WebContent/stage1/"));
});

*/

/*
 * fix same origin issue, which is currently not required.
 * 
 */
/*
app.all('*', function(req, res, next){
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});
*/
//app.listen(process.env.PORT || 8099);
if (path.basename(process.argv[1],'.js') == path.basename(__filename,'.js')) {
  module.exports.start()
}

/*
app.get('/api/v1/items', function(req, res){
	connection.query("SELECT * from cyantest.displayItem", function(err, rows){
        if(err != null) {
            res.end("Query error:" + err);
        } else {
            res.jsonp(rows);
            res.end();
        }       
    });
});

app.post('/api/v1/item/:id',function(req,res){
	
	var item = req.body;
	var mysqlQuery = "UPDATE cyantest.displayItem SET ";
	if(item === undefined)
	{
		res.end();
	}	
	if(item.label)
	{
		mysqlQuery += "label='"+item.label+"' ";
	}
	if(item.description)
	{
		if(item.label)
		{
			mysqlQuery +=",";
		}
		mysqlQuery += "description='"+item.description+"' ";
	}
	if(item.active !== undefined)
	{
		if(item.label || item.description)
		{
			mysqlQuery +=",";
		}
		var active = (item.active === 'true') ? true : false;
		mysqlQuery += "active="+active+" ";
	}
	mysqlQuery += "WHERE id="+req.params.id;	
	
	console.log(mysqlQuery);		
	connection.query(mysqlQuery, function(err, rows){
        if(err != null) {
            res.end("Query error:" + err);
        } else {           
            res.send("ok");
            res.end();
        }       
    });
}); 
*/
