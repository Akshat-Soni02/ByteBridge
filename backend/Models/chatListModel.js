const mongoose = require('mongoose');
const chatSchema = require('./chatSchema');

const chatListSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    chatList: [chatSchema]
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

chatListSchema.methods.sortByDateDesc = function() {
    this.chatList.sort((a, b) => b.date - a.date);
};

module.exports = mongoose.model('ChatList', chatListSchema);
