var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Bookschema = new Schema({

    title: {
        type: String,
        required: true
    },

    authors: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: true
    },

    image: {
        data: Buffer,
        contentType: String
    },

    link: {
        type: String,
        required: true

    }
});

var Book = mongoose.model("Book", Bookschema);

module.exports = Book;