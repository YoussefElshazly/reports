const mongoose = require('mongoose');
const path = require('path');

const logger = require('./logger');

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    logger.info(`[${path.relative(process.cwd(), __filename)}] Database connected.`);
  } catch (error) {
    logger.error(error.stack);
  }
};

module.exports.close = async () => {
  try {
    await mongoose.connection.close();

    logger.info(`[${path.relative(process.cwd(), __filename)}] Database connection closed.`);
  } catch (error) {
    logger.error(error.stack);
  }
};
