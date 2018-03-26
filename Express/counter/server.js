var express = require("express");

var session = require("express-session");

var app = express();

var path = require("path");

app.use(session({secret: 'codingdojorocks'}));

app.use(express.static(path.resolve('assets')));

app.set('view engine', 'ejs');


app.get('/', function(request, response) { 
    if(!request.session.counter){
        request.session.counter = 0;
    }
    request.session.counter +=1;
    response.render("index.ejs", {counter: request.session.counter});
})

app.get('/two', function(request, response) { 
    request.session.counter += 1;
    response.redirect("/");
})

app.get('/reset', function(request,response){
    request.session.counter = 0;
    response.redirect("/");
})

app.listen(8000, function(){
    console.log("listening on 8000");   
})