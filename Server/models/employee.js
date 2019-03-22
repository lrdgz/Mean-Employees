const mongoose = require("mongoose");
const { Schema } = mongoose;

const Employee = new Schema({
    name: { required: true, type: String },
    position: { required: true, type: String },
    office: { required: true, type: String },
    salary: { required: true, type: Number },
});


module.exports = mongoose.model('Employee', Employee);