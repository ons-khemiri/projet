const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const UserSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	isAdmin: { type: Boolean},
	isAgent: { type: Boolean},
	phone: Number,
});
module.exports = User = model("user", UserSchema);