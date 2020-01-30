const {createService} = require('../../lib');
const { APPLICATION_LOG_LEVEL } = process.env;

const config = {
  loggerConfig: {
    level: APPLICATION_LOG_LEVEL,
  }
};

const logger = createService(config);

// logger.info({
//   message:"info test message",
//   correlationId: "123435",
//   data: { hello:"world" }
// });
