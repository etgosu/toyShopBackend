const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prodCd: {type: String, required: true},
    prodNm: {type: String, required: true},
    price: Number,
    qty: Number
}, {timestamps: true})

const Product = mongoose.model('product', ProductSchema)

module.exports =  Product 