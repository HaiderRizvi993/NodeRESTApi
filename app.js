const express = require('express');
const app = express();

const productRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

app.use('/products', productRouter);
app.use('/orders', ordersRouter);

module.exports = app;