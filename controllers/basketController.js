const Basket = require('../models/Basket'); // 모델 경로에 따라 수정해주세요.

exports.createBasket = async (req, res) => {
    try {
        const basketItem = new Basket(req.body); // Basket 모델을 사용하여 인스턴스 생성
        await basketItem.save(); // 데이터베이스에 저장
        return res.status(201).send({ message: 'Basket item successfully added', basketItem });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
};

exports.listBaskets = async (req, res) => {
    try {
        const basketList = await Basket.find();
        return res.send({ basketList });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
};