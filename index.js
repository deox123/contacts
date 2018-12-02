const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const connectString = 'mongodb://nikola:sifra@contacts-shard-00-00-ccbjr.mongodb.net:27017,contacts-shard-00-01-ccbjr.mongodb.net:27017,contacts-shard-00-02-ccbjr.mongodb.net:27017/test?ssl=true&replicaSet=Contacts-shard-0&authSource=admin&retryWrites=true'
mongoose.connect(connectString);
const db = mongoose.connection;
db.once('open', function() {
  console.log('connected!')
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


const personSchema = new mongoose.Schema({
    name: String,
    surname: String,
    createdDate: String,
    city: String,
    address: String,
    phone: Number,
});

const Person = mongoose.model('Person', personSchema);


app.get('/persons', (req, res) => {
    Person.find((err, persons) => {
        if (err) return console.log(err)
        res.send(JSON.stringify(persons));
    })
});

app.post('/new', (req, res) => {
    const newPerson = new Person({
        ...req.body,        
        createdDate: new Date().toISOString(),
    })
    newPerson.save((err, person) => {
        if (err) return console.log(err);
        res.status(200).send();
    })
});

app.post('/delete/:id', (req, res) => {
    Person.findByIdAndDelete(req.params.id, (err, person) => {
        if (err) return console.log(err);
        res.send(JSON.stringify(persons));
    });
});

app.post('/edit/:id', (req, res) => {
    Person.findByIdAndUpdate(req.params.id, {...req.body}, {new: true}, (err, person) => {
        if (err) return console.log(err);
        res.send(JSON.stringify(person));
    });
})

const port = 5000;
app.listen(port);
console.log(`Server up and running on port: ${port}`);

