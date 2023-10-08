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
      { "role": "system", "content": "Your name is Mike, you are a digital assistant. do your best to assisst the users" },
      { "role": "user", "content": prompt }
    ]
  });
  say.speak( response.choices[0].message.content);

  sendSuccessResponse(res, response.choices[0].message.content)
}