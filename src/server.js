const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/myshopdb';
mongoose.connect(MONGO_URI).then(result => console.log('DB connected'));

const { Product } = require('../models/Product');

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', function(req, res){

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
            const product = new Product(req.body);
            await product.save(); 
            return res.send({ product })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ err:err.message });
    }
})

app.get('/prodList', async (req, res)=>{
    const prodList = await Product.find();
    return res.send({prodList});
})

app.get('/prodDetail/:prodNm', async (req, res) =>{
    const { prodNm } = req.params;
    const prod = await Product.findOne({prodNm : prodNm})
    return res.send({ prod })
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
