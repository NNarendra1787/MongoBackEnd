const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
    },
    password:{
        type: String,
    }

})

const user = mongoose.model("userData", userSchema);

module.exports = user;