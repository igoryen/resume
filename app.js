// app.js
var express = require('express'), // 10
	  app = express();
var path = require('path'); // 20
var nunjucks = require( "nunjucks" ); // 30
var nunjucksEnv   = new nunjucks.Environment( new nunjucks.FileSystemLoader( path.join( __dirname, 'views' )));
var routes  = require( "./routes" ); // 40 
var cwd_name = process.cwd();

app.configure( function (){
	nunjucksEnv.express( app );
	app.use( express.static( path.join( __dirname  + "/public") ) ); 
  app.use( express.static(cwd_name));  
});

app.get("/", routes.pages("index"));
app.get("/questions", routes.pages("questions"));


app.listen(1977);
console.log('Listening on port 1977');
