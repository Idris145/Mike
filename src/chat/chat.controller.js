require('dotenv').config();
const LOG = require('@hivecloudsolutions/hive-common/helpers/logger');
const { Configuration, OpenAIApi } = require("openai");
const {
  sendSuccessResponse
} = require('@hivecloudsolutions/hive-common/helpers/helpers')
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// startNewChat
exports.startNewChat = async (req, res) => {
  const prompt = req.body.message;
  const openai = new OpenAIApi(configuration);
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { "role": "system", "content": "Your name is Mike, you are a digital assistant. do your best to assisst the users" },
      { "role": "user", "content": prompt }
    ]
  })
  sendSuccessResponse(res, response.data.choices[0])
}