const mogooes = require("mongoose");
require("dotenv").config();
const connected = mogooes.connect(process.env.BASE_URL);

module.exports = {
  connected,
};
