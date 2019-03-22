
const express = require("express");
const morgan = require("morgan");

const app = express();
const { Mongoose } = require('./database');

const port = process.env.PORT || 3000;

//Settings
app.set('port', port);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/employee', require('./routes/employees.routes'))

//Static Files
app.use(express.static(__dirname + '/public'));

//Starting the Server
app.listen(app.get('port'), () => {
    console.log("Server On", app.get('port'));
});