const app = require('./app');
const LOG = require('@hivecloudsolutions/hive-common/helpers/logger');

const port = process.env.PORT_CLIENT || 3000;
const server = require('http').createServer(app);

server.listen(port, () => {
  LOG.info(`Client Server started on port ${port}`);
});

module.exports = server;
