const Product = require('../models/Product'); // 모델 경로에 따라 수정해주세요.

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        return res.send({ product });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
};

exports.listProducts = async (req, res) => {
    try {
        const prodList = await Product.find();
        return res.send({ prodList });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
};

exports.productDetail = async (req, res) => {
    try {
        const { prodNm } = req.params;
        const prod = await Product.findOne({ prodNm });
        return res.send({ prod });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
};
