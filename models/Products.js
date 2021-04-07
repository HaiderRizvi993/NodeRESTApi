const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const productSchema =  Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});

const Products = model('Products', productSchema);


