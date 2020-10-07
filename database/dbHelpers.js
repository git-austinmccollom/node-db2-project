const db = require("../database/connection.js");

module.exports = {
    get,
    getById,
    insert
}

//CRUD
//Create
async function insert(car) {
    const id = await db("cars").insert(car)
    return getById(id[0])
}

//Read
function get() {
    return db("cars");
}

function getById(id) {
    return db("cars").where({ id }).first();
}