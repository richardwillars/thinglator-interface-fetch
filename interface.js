module.exports = async (config, fetch) => {
  return {
    disconnect: async () => {},
    execute: async (params) => fetch(params),
  };
};