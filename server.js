
// var express = require("express");

// const bodyParser = require('body-parser');
// var path = require("path");
// var app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'))
// app.get("/", function(req, res){
// 	res.sendFile(path.join(__dirname,'./public/form.html'));
// });

// app.post("/addinfo", function(req, res){
// 	let name   = req.body.Surname
// 	let age   = req.body.Age
// 	console.log(name,age);

// 	res.redirect('/')
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });

const mongoose = require('mongoose');

// Replace the connection string with your MongoDB connection string
const connectionString = 'mongodb+srv://Black:077477441tig@cluster0.ogwcnlb.mongodb.net/sample_mflix'





mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
	console.log('Connected to MongoDB!');

	try {

let result = await mongoose.connection.db.collection('users').insertOne({
name: name,
email: email,
password: password,
})
result.json(result);
		//const allMovies = await mongoose.connection.db.collection('movies').findOne({title:'The Dark Angel'}).toArray(); // .insertMany(newMovies);

		//const city = await mongoose.connection.db.collection('theaters').find({$or: [{'location.address.city': 'California'},{'location.address.city': 'Bloomington'}]}).toArray();

		//const name = await mongoose.connection.db.collection('users').updateOne({ name: 'Gexam' }, { $set: { name: 'Valod' } });

		//const name = await mongoose.connection.db.collection('users').insertOne({ name: 'Gexam' } );
		//console.log('users:', name);
		//console.log('City:', city);
		//console.log('All Movies:', allMovies);


	} catch (error) {
		console.error('Error retrieving movies:', error);
	} finally {
		mongoose.connection.close();
	}
})