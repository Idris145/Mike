const mongoose = require('mongoose');
const { Schema } = mongoose;
const { chatGptMessage } = require('@mike/utils/helpers');

const chatSchema = new Schema(
    {
        chatId: { type: String, required: true, unique: true },
        messages: [chatGptMessage]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.models.Chat || mongoose.model('Chat', chatSchema);
