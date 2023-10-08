const mongoose = require('mongoose');
const { Schema } = mongoose;


const chatGptMessage = new Schema({
    role: { type: String, required: true, enum: ['user', 'system', 'assistant'] },
    text: { type: String, required: true },
}, { _id: false });

module.exports = {
    chatGptMessage
}