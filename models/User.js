const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must be more then 3 characters"],
        maxLength: [99, "This is too much man.... Chillll..."]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must be more then 3 characters"],
        maxLength: [99, "This is too much man.... Chillll..."]
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: [3, "Your password is too weak... Khalaaas"],
    }
},
{
    timestamps: true // means createdAt and updatedAt
});

const User = mongoose.model("User", userSchema);

module.exports = User;