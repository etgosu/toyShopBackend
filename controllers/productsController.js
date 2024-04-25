const Product = require('../models/Product');

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
