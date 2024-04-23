const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/myshopdb';
mongoose.connect(MONGO_URI).then(result => console.log({result}));

const { Product } = require('../models/Product');

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', function(req, res){
    // const resData =
    // {
    //     // `data` is the response that was provided by the server
    //     data: {},

    //     // `status` is the HTTP status code from the server response
    //     status: 200,

    //     // `statusText` is the HTTP status message from the server response
    //     statusText: 'OK',

    //     // `headers` the HTTP headers that the server responded with
    //     // All header names are lowercase and can be accessed using the bracket notation.
    //     // Example: `response.headers['content-type']`
    //     headers: {},

    //     // `config` is the config that was provided to `axios` for the request
    //     config: {},

    //     // `request` is the request that generated this response
    //     // It is the last ClientRequest instance in node.js (in redirects)
    //     // and an XMLHttpRequest instance in the browser
    //     request: {}
    // }
    
    const resData = 'Hello shop MainPage';
    
    return res.send(resData)
})

app.listen(3000, function(){
    console.log('server listening on port 3000');
})

app.get('/login', function(req, res){
    return res.send('login page 3')
})

app.post('/product', async (req, res) =>{
    try {
            // console.log(req.body);
            const product = new Product(req.body);
            await product.save(); 
            return res.send({ product })
        
    } catch (err) {
        console.log(err)
        return res.status(500).send({ err:err.message });
    }
})

app.get('/prodList', function(req, res){
    return res.send('prod list')
})

app.get('/prodDetail', function(req, res){
    return res.send('prod Detail')
})

app.get('/basketList', function(req, res){
    return res.send('basket List')
})

app.get('/mypage', function(req, res){
    return res.send('mypage')
})

app.get('/eventList', function(req, res){
    return res.send('event')
})
