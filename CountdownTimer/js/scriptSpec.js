import { updateTime } from "../js/script.js";
import { setup } from "../js/script.js";

describe("countdown clock functionality", () => {
  it("update function", () => {
    let time = updateTime(1);
    expect(time).toBe("00 : 01");
  });

  it("update function check time is 0", () => {
    let time = updateTime(0);
    expect(time).toBe("00 : 00");
  });
});

describe("setup function", () => {
  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });
  it("time at begining", function() {
    let time = 1;
    setup(time);
    expect(setup(time)).toBe("01 : 00");
  });
});
