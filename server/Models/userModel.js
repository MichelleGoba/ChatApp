// use mongoose to create the models
const mongoose = require("mongoose");

// skeema to shape the document
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, minlength: 3, maxlength: 30},
    email: {type: String, required: true, minlength: 3, maxlength: 200, unique: true},
    password: {type: String, required: true, minlength: 3, maxlength: 1024},
    confirmPassword: {type: String, required: true, minlength: 3, maxlength: 1024},
},
{
    timestamps: true,   // timestamps include he date  a document was created
}
);

// model gives various methods to use to save eand retrieve data to and from the database for a user

const userModel = mongoose.model("User", userSchema)

module.exports = userModel;

