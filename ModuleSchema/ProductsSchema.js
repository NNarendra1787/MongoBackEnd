const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    no: {
        type: Number,
    },
    title: {
        type: String,
    },
    title2:{
        type: String,
    },
    image:{
        type: String,
    },
    price:{
        type: Number,
    },
    crossPrice:{
        type: Number,
    },
    rating:{
        type: Number,
    },
    decriptions:{
        type: String,
    },
    cat:{
        type: String,
    },
    comp:{
        type: String,
    }
})

const product = mongoose.model("product", productSchema);
module.exports = product;