var mongoose = require('mongoose')
var url = "mongodb://127.0.0.1:27017/CarInsights"
/*
Opens Mongoose's default connection to MongoDB
*/
mongoose.connect(url)
// var db = mongoose.connection
console.log("Connection to Mongodb Database is Done!!")
// module.exports=db
