require('dotenv').config();
const LOG = require('@hivecloudsolutions/hive-common/helpers/logger');
// getStaticById
exports.home = async (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
};