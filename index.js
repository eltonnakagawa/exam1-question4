 //jshint esversion:6

// create an express object from the express package
const express = require("express");
const bodyParser = require("body-parser");

// create an app object from the express object
const app = express();
// this allows the parsing of the html file using body parser
app.use(bodyParser.urlencoded({extended: true}));

//this sends the html file to the web page using the root directory
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

// this gets the response from the values in the web page
app.post("/", function(req, res){

  var rad1 = Number(req.body.n1);

// does the computation of the input variables, as numbers
  var area1 = Math.PI * rad1 * rad1;
  var circ1 = 2 * Math.PI * rad1;

// sends the results back to the web page as string
  res.send("The area of a circle with a raidus of " + rad1 + " is " + area1.toFixed(2) + " and the circumference is " + circ1.toFixed(2));
})

//this gets the response from the web page to this placeholder

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});