require('dotenv').config()
const server = require('./api/server.js');
const defaults = require('./config/defaults.js')

server.listen(process.env.PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${process.env.PORT} ***\n`);
});
