const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/myshopdb';
mongoose.connect(MONGO_URI).then(result => console.log('DB connected'));

const { Product } = require('../models/Product');
const { Basket } = require('../models/Basket');
const { Event } = require('../models/Event');

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

app.get('/prodList', async (req, res) => {
    try {
        const prodList = await Product.find();
        return res.send({ prodList });
    } catch (err) {
        console.log(err)
        return res.status(500).send({ err: err.message });
    }
})
app.get('/prodDetail/:prodNm', async (req, res) => {
    try {
        const { prodNm } = req.params;
        const prod = await Product.findOne({ prodNm: prodNm })
        return res.send({ prod });
    } catch (err) {
        console.log(err)
        return res.status(500).send({ err: err.message });
    }
})

app.get('/basketList', async (req, res) => {
    try {
        const basketList = await Basket.find();
        return res.send({ basketList });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
});

app.post('/basketList', async (req, res) => {
    try {
        const basketItem = new Basket(req.body); // Basket 모델을 사용하여 인스턴스 생성
        await basketItem.save(); // 데이터베이스에 저장
        return res.status(201).send({ message: 'Basket item successfully added', basketItem });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
});

app.post('/mypage', async (req, res) => {
    try {
        const userInfo = await User.find({ userId: req.body.userId });
        return res.send({ userInfo });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
});

app.get('/eventList', async (req, res) => {
    try {
        const eventList = await Event.find();
        return res.send({ eventList });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
});

app.post('/eventList', async (req, res) => {
    try {
        const event = new Event(req.body); // Event 모델을 사용하여 인스턴스 생성
        await event.save(); // 데이터베이스에 저장
        return res.status(201).send({ message: 'Event successfully added', event });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
});

