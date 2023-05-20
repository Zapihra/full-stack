const express = require('express');
const path = require('path');
const expVal = require('express-validator');
const logger = require('./middleware/logger');

const app = express();

//init middleware
//app.use(logger)

app.use(expVal());

//homepage route
app.get('/', (req,res) => res.render('index'))

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//member api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));