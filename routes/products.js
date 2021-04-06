const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Get Request'
    })
});

router.post('/', (req, res, next) =>{
    res
        .status(200)
        .json({
        message: 'POST request'
    })
});

router.get('/:productId', (req, res, next) =>{
    const id = req.params.productId;
    id === "special" 
    ? 
    res
        .status(200)
        .json({message: "You discover special ID."})
    :
    res.status(200)
        .json({message: "You passed an ID."})
    // if else
    /* if(id === "special"){
        res
            .status(200)
            .json({message: "You discover special ID."})
    }else {
        res
        .status(200)
        .json({message: "You passed an ID."})
    } */
})

router.patch('/:productId', (req, res, next)=>{
    res.status(200)
        .json({message: `Product Id ${req.params.productId} is updated.`})
})

router.delete('/:productId', (req, res, next)=>{
    res.status(200)
        .json({message: `Product Id ${req.params.productId} is deleted.`})
})


module.exports = router;  