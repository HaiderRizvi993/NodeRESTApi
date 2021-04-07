const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

//const connectDB = require('./config/mongoDB');

const productRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

mongoose.connect(process.env.MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(morgan('dev'));
//connectDB() // Database connection
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res
        .header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        if(req.method === 'OPTIONS'){
            req
                .header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE')
                return res.status(200).json({})
        }
        next();
    });


app.use('/products', productRouter);
app.use('/orders', ordersRouter);
app.use('/', (req, res, next) => {
    res.status(201).send("Home Page");
});

app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({ 
        message: error.message
    });
});



module.exports = app;