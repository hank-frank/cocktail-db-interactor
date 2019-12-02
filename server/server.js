const express = require('express');
const axios = require('axios');
const mysql = require('mysql');

const app = express();

app.use(express.static('public'));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "AfkVVRg963xP2kc",
    database: "CocktailDB"
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected baby!");
//     let sql = "CREATE DATABASE CocktailDB"
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Database CocktailDB created!");
//     });
// });

// //Create Cocktail Table
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected baby!");
//     // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     var sql = "CREATE TABLE IF NOT EXISTS Cocktail(id_cocktail INT NOT NULL AUTO_INCREMENT, api_id VARCHAR(8) NULL, cocktail_name VARCHAR(45) NOT NULL, instructions VARCHAR(1000) NOT NULL, source VARCHAR(20) NOT NULL, PRIMARY KEY (id_cocktail), UNIQUE INDEX id_cocktail_UNIQUE (id_cocktail ASC) VISIBLE)";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table Cocktail created!");
//     });
// });

// //Create Receptacle Table
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected baby!");
//     var sql = "CREATE TABLE IF NOT EXISTS Receptacle (id_receptacle INT NOT NULL AUTO_INCREMENT, receptacle_name VARCHAR(45) NOT NULL, cocktail_id INT NOT NULL, PRIMARY KEY (id_receptacle), UNIQUE INDEX id_receptacle_UNIQUE (id_receptacle ASC) VISIBLE, INDEX cocktail_id_idx (cocktail_id ASC) VISIBLE, CONSTRAINT id_cocktail FOREIGN KEY (cocktail_id) REFERENCES Cocktail (id_cocktail) ON DELETE NO ACTION ON UPDATE NO ACTION)";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table Receptale created!");
//     });
// });

// //Create Categories Table
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected baby!");
//     var sql = "CREATE TABLE IF NOT EXISTS Categories (id_categories INT NOT NULL AUTO_INCREMENT, category_name VARCHAR(45) NOT NULL, cocktail_id INT NOT NULL, PRIMARY KEY (id_categories), UNIQUE INDEX id_categories_UNIQUE (id_categories ASC) VISIBLE, INDEX cocktail_id_idx (cocktail_id ASC) VISIBLE, CONSTRAINT cocktail_id FOREIGN KEY (cocktail_id) REFERENCES Cocktail (id_cocktail) ON DELETE NO ACTION ON UPDATE NO ACTION)";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table Categories created!");
//     });
// });

// //Create Ingredients Table
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected baby!");
//     var sql = "CREATE TABLE IF NOT EXISTS Ingredients (id_ingredient INT NOT NULL AUTO_INCREMENT, ingredient_name VARCHAR(80) NOT NULL, units VARCHAR(80) NULL, PRIMARY KEY (id_ingredient), UNIQUE INDEX id_ingredient_UNIQUE (id_ingredient ASC) VISIBLE)";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table Ingredients created!");
//     });
// });

//Create Cocktail_Ingredient Table
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected baby!");
    var sql = "CREATE TABLE IF NOT EXISTS Cocktail_Ingredient (id_cocktail_ingredient INT NOT NULL AUTO_INCREMENT, id_relational_cocktail INT NOT NULL, id_relational_ingredient INT NOT NULL, INDEX id_relational_cocktail_idx (id_relational_cocktail ASC) VISIBLE, INDEX id_relational_ingredient_idx (id_relational_ingredient ASC) VISIBLE, PRIMARY KEY (id_cocktail_ingredient), UNIQUE INDEX id_cocktail_ingredient_UNIQUE (id_cocktail_ingredient ASC) VISIBLE, CONSTRAINT id_relational_cocktail FOREIGN KEY (id_relational_cocktail) REFERENCES Cocktail (id_cocktail) ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT id_relational_ingredient FOREIGN KEY (id_relational_ingredient) REFERENCES Ingredients (id_ingredient) ON DELETE NO ACTION ON UPDATE NO ACTION)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table Cocktail_Ingredient created!");
    });
});
module.exports = app;