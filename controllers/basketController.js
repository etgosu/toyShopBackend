const Basket = require('../models/Basket'); // 모델 경로에 따라 수정해주세요.
const User = require('../models/User');
const Product= require('../models/Product');

exports.createBasket = async (req, res) => {
    try {
        const {userId , prodCd } = req.body;
        const user = await User.findOne({userId:userId});
        const prod = await Product.findOne({prodCd: prodCd});
        const basketItem = new Basket({
            ...req.body,
            userId:user._id, 
            prodCd: prod._id
        }); // Basket 모델을 사용하여 인스턴스 생성
        await basketItem.save(); // 데이터베이스에 저장
        return res.status(201).send({ message: 'Basket item successfully added', basketItem });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
};

exports.listBaskets = async (req, res) => {
    try {
        const basketList = await Basket.find({}, '-__v');
        return res.send({ basketList });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
};