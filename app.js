/*  func-names: "off" */
const express = require('express');

const app = express();
const cors = require('cors');
const LOG = require('@hivecloudsolutions/hive-common/helpers/logger');
const config = require('./config/database');
const { errorWrapper } = require('@hivecloudsolutions/hive-common/helpers/errorUtils');
config();

app.use(express.json());

app.use(cors());

app.use('/', require('./src/static/static.routes'));

module.exports = app;
