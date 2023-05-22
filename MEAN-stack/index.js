const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')
const users = require('./routes/users');

//connect to database
mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected', () => {
    console.log('connected to database '+ config.database);
});

//on error
mongoose.connection.on('error', (err) => {
    console.log('database error '+ err);
});

const app = express();

//port number
const port = 3000;

//cors middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());

app.use('/users', users);

//index route
app.get('/', (req,res) => {res.send('Invalid endpoint')});

//start server
app.listen(port, () => console.log('server started on port ' + port));