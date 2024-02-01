var express = require("express");
var path = require("path");
const bodyParser = require('body-parser');
var app = express();

const mongoose = require('mongoose');
//const connectionString = 'mongodb+srv://Tumo:Tumo1234@cluster0.ek0rehr.mongodb.net/sample_mflix';
const connectionString = 'mongodb+srv://Tumo:Tumo1234@cluster0.ek0rehr.mongodb.net/Nfts';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('viewnengine','ejs');

app.get("/", function (req,res) {

	mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        console.log('Connected to MongoDB!');
        try {
			let result = await mongoose.connection.db.collection('theaters').find({'location.address.city':'Bloomington'}).toArray()

			res.render('../public/form.ejs',{
				info: result
			});
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })


})
app.post('/addinfo', async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        console.log('Connected to MongoDB!');
        try {
            let result = await mongoose.connection.db.collection('users').insertOne({
                name: name,
                email: email,
                password: password
            })
            res.json(result);
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
});




app.listen(3000, function () {
    console.log("Example is running on port 3000");
});