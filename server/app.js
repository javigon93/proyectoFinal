
const express = require('express');
const mongoose = require('mongoose');
const User = require('./app/models/user');
const config= require('./conf/config.json')

//enrouting
const users=require('./app/routes/users');
const login= require('./app/routes/login');



mongoose.connect(`${config.database.connectionURL}${config.database.db}`,
    { useNewUrlParser: true, useUnifiedTopology: true });

let app = express();
app.use(express.json());
const circuit= require('./app/routes/sportsCircuit');
app.use('/users', users);
app.use('/login', login);
app.use('/circuit', circuit)
app.listen(8080);



function run() {


}
