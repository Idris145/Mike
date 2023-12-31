const express = require('express');
const chatController = require('@mike/chat/chat.controller');
const { errorWrapper } = require('@hivecloudsolutions/hive-common/helpers/errorUtils');

const router = express.Router();

// route to get all statics
router.post('/startNewChat', errorWrapper( chatController.startNewChat));
router.post('/sendMessage', errorWrapper( chatController.sendMessage));
module.exports = router;
