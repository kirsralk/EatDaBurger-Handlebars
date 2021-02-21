// Import MySQL connection.
var connection = require("../config/connection.js");

function selectAll() {
    
};

function insertOne() {
    
};

function updateOne() {
    
};

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb (result);
        });
    } //, then next function
}; // end orm variable

module.exports = orm;