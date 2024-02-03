// Import the database configuration from the specified file
const dbConfig = require("../config/db.config.js");

// Require the Mongoose library for MongoDB interaction and set the global Promise to be used by Mongoose
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// Create an empty object to represent the database
const db = {};

// Assign the Mongoose library to the "mongoose" property of the database object
db.mongoose = mongoose;

// Assign the MongoDB connection URL from the configuration to the "url" property of the database object
db.url = dbConfig.url;

// Use the "lecture.model.js" file to define the "lectures" collection schema and model using Mongoose
db.lectures = require("./lecture.model.js")(mongoose);

// Export the database object for external use
module.exports = db;
