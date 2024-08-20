const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const linkSchema = new mongoose.Schema({
    shortURL: {
        type: String,
        required: [true, 'Short URL is required'],
        unique: true,
        trim: true
    },
    URL: {
        type: String,
        required: [true, 'Original URL is required'],
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
});
const linkModel = mongoose.model("Link",linkSchema);
module.exports = linkModel;
