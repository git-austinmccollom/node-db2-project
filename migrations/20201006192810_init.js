const { table } = require("../database/connection");

exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    // generates integer primary key called id that is unsigned and auto increments
    tbl.increments();
    tbl.string("VIN").notNullable().unique().index();
    tbl.string("Make").notNullable().index();
    tbl.string("Model").notNullable().index();
    tbl.decimal("Mileage").notNullable().index();
    // not immediately known per spec
    tbl.string("Transmission Type").index();
    tbl.string("Title Status").index();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
