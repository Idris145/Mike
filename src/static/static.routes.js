const express = require('express');
const staticController = require('./static.controller');
const { errorWrapper } = require('@hivecloudsolutions/hive-common/helpers/errorUtils');

const router = express.Router();

// route to get all statics
router.get('/', errorWrapper( staticController.home));
module.exports = router;
