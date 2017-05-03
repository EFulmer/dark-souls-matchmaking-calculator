import {expect} from "chai"

import {calcSL} from "../src/App.js"

describe("sl calc logic", () => {

  describe("level one", () => {
    const l1Players = calcSL(1)
    
    // TODO see that all have `low` of 1
    const valid = Object.keys(l1Players).filter((entry) => entry.low == 1)
    expect(valid.length).to.equal(l1Players.length)
  }
})
