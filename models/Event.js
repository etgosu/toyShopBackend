const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    eventId: {
        type: String,
        required: true,
        unique: true
    },
    eventName: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    isHidden: {
        type: Boolean,
        default: false
    },
    eventProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    eventQuantity: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, { timestamps: true }); // timestamps 옵션을 true로 설정하여 생성일과 수정일을 자동으로 관리

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
