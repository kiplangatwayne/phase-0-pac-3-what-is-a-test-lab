const name = "Joe";
const height = 74;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};
what-is-a-test
Name
  ✓ returns "Susan"
Height
  1) is less than 40
Message
  ✓ gives the name and height


2 passing (736ms)
1 failing

1) what-is-a-test
   Height
     is less than 40:
 Error: Expected 74 to be less than 40
  at assert (node_modules/expect/lib/assert.js:29:9)
  at Expectation.toBeLessThan (node_modules/expect/lib/Expectation.js:156:28)
  at Context.<anonymous> (test/index-test.js:13:28)
  at processImmediate (internal/timers.js:461:21)
  describe("Height", () => {
    it("is less than 40", () => {
      expect(height).toBeLessThan(40);
    });
  });