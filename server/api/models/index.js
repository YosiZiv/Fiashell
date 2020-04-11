const mongoose = require('mongoose');
const chalk = require('chalk');
// DB Config key (credentials)
const MONGOOSE_DEBUG = false;

mongoose.set('debug', MONGOOSE_DEBUG);
mongoose.set('useFindAndModify', false);
// DB Connection settings
const connectionSettings = {
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
// Connect to MongoDB
mongoose
  .connect(`mongodb://localhost:27017/mppum`, connectionSettings)
  .then(
    () => {
      console.log(chalk.white('DB cluster connected... faishell? faishell?'));
    },
    err => {
      console.error(`${new Date()} -> Failed to connect to MongoDB!
      No Faishell for you!, `, err);
      // Close Server
      process.exit(0);
    },
  )
  .catch(err => console.log(err));
// Exports
module.exports.User = require('./userModel');
