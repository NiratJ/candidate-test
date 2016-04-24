// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://dev-candidate:^32nqJ9SF@ds013891.mlab.com:13891/candidate-test", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  db.close();
});