const fetch = require("node-fetch");
const interfaceModule = require("./interface");

module.exports = {
  initialise: async config => interfaceModule(config, fetch),
  commsType: "http",
  interfaceId: "thinglator-interface-fetch"
};
