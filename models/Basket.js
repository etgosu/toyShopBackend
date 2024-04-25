const mongoose = require('mongoose');
const { Schema } = mongoose;

const BasketSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // 장바구니 소유자ID
    prodCd: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, // 상품모델ID
    qty: { type: Number, required: true, min: 1 }, // 장바구니 제품수량
}, { timestamps: true });

const Basket = mongoose.model('Basket', BasketSchema);

module.exports =  Basket ;