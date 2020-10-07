const db = require("../database/connection.js");

module.exports = {
    get,
    // getById,
    // insert
}

//CRUD
//Create

//Read
function get() {
    return db("cars");
}