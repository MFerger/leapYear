var code = require('../main.js');
var expect = require('chai').expect

describe("something", function () {
  it("Will spit out the right year", function () {
    expect(code.leapYear(2016)).to.equal(true)
  })
});
