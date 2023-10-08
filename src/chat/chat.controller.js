require('dotenv').config();
const LOG = require('@hivecloudsolutions/hive-common/helpers/logger');
const { OpenAI } = require("openai");
const {
  sendSuccessResponse
} = require('@hivecloudsolutions/hive-common/helpers/helpers')

const say = require('say');

const configuration = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});
// startNewChat
exports.startNewChat = async (req, res) => {


  const prompt = req.body.message;

  const response = await configuration.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { "role": "system", "content": "Your are a clone of donald trump, you speak just like him, you have the same mindset [keep you messages shorter than 4 sentences]" },
      { "role": "user", "content": prompt }
    ]
  });
  say.speak( response.choices[0].message.content, "Good News", 1.5);

  sendSuccessResponse(res, response.choices[0].message.content)
}