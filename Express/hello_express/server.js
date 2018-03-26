var express = require("express");
// returns an application creator that we store in the variable 'express'
// ("express" is a node module!)
var app = express();
//using the application creator we can create an express app; 'app' has the
//ability to run methods like get and post which will handle get and post 
//requests. (We invoked the function returned to the express variable. 
//Requiring "express" returns a "CreateApplication" function that we store in 
//the express variable before we invoke it.)

var bodyParser = require('body-parser'); //to handle post-data from request object

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response) { //handling base .get route(aka index)
    // console.log(request, "RESPONSE BEGINS HERE!!!!!!!!!", response);
    response.send("Hello Express"); //sends to response the string
})

app.use(express.static(__dirname + "/static")); //tells our server to
//use a static file folder to handle requests for static content.

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs 
// as opposed to another templating engine like jade
app.set('view engine', 'ejs');

var users_array = [
    {name: "Michael", email: "michael@codingdojo.com"}, 
    {name: "Jay", email: "jay@codingdojo.com"}, 
    {name: "Brendan", email: "brendan@codingdojo.com"}, 
    {name: "Andrew", email: "andrew@codingdojo.com"}
];

app.get("/users", function (request, response){ //adding a new route that will
    //render an ejs view and pass it some user data (hard-coded user data below:)
    //Update: Took the users_array out of function scope to test post method
    response.render('users', {users: users_array});
}) //Notice we are passing a JavaScript object to the response.render() method. 
   //That way, when we pass a piece of data to a view, every key-value pair within 
   //the larger piece of data becomes its own variable.

app.post('/users', function (req, res){
//code to add user to db goes here!
    console.log("POST DATA \n\n", req.body);
    users_array.push(req.body);
    res.redirect('users');
})


// app.get("/users/:id", function (req, res){
//     console.log("The user id requested is:", req.params.id);
//     // just to illustrate that req.params is usable here:
//     res.send("You requested the user with id: " + req.params.id);
//     // code to get user from db goes here, etc...
// });

app.listen(8000, function(){
    console.log("listening on 8000");   
})