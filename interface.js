module.exports = async (config, fetch) => ({
  disconnect: async () => {},
  execute: async params => fetch(params)
});
