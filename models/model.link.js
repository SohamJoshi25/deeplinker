const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;
const linkSchema = new Schema({
    shortURL:{
        type : String,
        required: true,
        unique: true 
    },
    URL:{
        type: String,
        required: true
    }
},{timestamps:true})
const linkModel = mongoose.model("Link",linkSchema);
module.exports = linkModel;
