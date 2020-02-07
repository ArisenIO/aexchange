const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// mongoose.set('debug', true);
const options = { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true };
const database = mongoose
	.connect(process.env.DB_URL, options)
	.then(() => console.log("DB", "Connected to database."))
	.catch(err => console.log("DB ERROR", err.message));

module.exports = database;