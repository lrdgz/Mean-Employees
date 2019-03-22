const mongoose = require("mongoose");

const URI = 'mongodb://localhost:27017/mean-employee';

//connect mongodb
mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is Connected'))
    .catch(err => console.error(err));

module.exports = mongoose;