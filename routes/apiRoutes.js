var db = require("./models");
var logger = require("morgan");
var mongoose = require("mongoose");
var app = express();

app.get("/api/books/:id", function (req, res) { 
    db.Book.findAll({})   
        .then(function (dbBook) {
            res.json(dbBook);
        })
        .catch(function (err) {
            res.json(err);
        });
});

app.post("/api/books/:id", function (req, res) {
    db.Book.create(req.body)
        .then(function (dbBook) {
            return db.Book.findOneAndUpdate({ _id: req.params.id }, { book: dbBook._id }, { new: true });
        })
        .then(function (dbBook) {   
            res.json(dbBook);
        })
        .catch(function (err) {    
            res.json(err);
        });
});

