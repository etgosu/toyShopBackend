const Basket = require('../models/Basket'); 
const User = require('../models/User');
const Product= require('../models/Product');

exports.createBasket = async (req, res) => {
    try {
        const {userId , prodCd } = req.body;
        const user = await User.findOne({userId:userId});
        const prod = await Product.findOne({prodCd: prodCd});
        const basketItem = new Basket({
            ...req.body,
            userId: user._id, 
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
        const {userNm} = req.body;
        const user = await User.findOne({userNm:userNm});
        const basketList = await Basket.findOne({userId: user._id}, '-__v -_id').populate('userId','userNm').populate('prodCd','prodNm price');
        //To-do : 상품명과 유저이름을 같이 조회 할수 있도록 변경필요.
        return res.send({ basketList });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
};
