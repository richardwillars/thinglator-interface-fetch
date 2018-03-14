const interfaceModule = require("./interface");

describe("Interface", () => {
  it("should export a function", () => {
    expect(typeof interfaceModule).toEqual("function");
  });
});
