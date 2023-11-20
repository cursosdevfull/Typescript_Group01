function describe(description, fn) {
  console.log(description);
  fn();
}

function it(description, fn) {
  console.log("  " + description);
  fn();
}

describe("testing sum", () => {
  it("sum two positive numbers", () => {
    var total = sum(20, 40);
    console.assert(total === 60, `Expected 60, but got ${total}`);
  });

  it("sum a positive and a negative number", () => {
    var total = sum(20, -10);
    console.assert(total === 10, `Expected 10, but got ${total}`);
  });

  it("sum zero and a number", () => {
    var total = sum(0, 30);
    console.assert(total === 30, `Expected 30, but got ${total}`);
  });

  it("sum two negative numbers", () => {
    var total = sum(-20, -10);
    console.assert(total === -30, `Expected -30, but got ${total}`);
  });
});
