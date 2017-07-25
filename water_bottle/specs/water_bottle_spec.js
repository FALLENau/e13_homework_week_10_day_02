var assert = require("assert")

var WaterBottle = require("../water_bottle.js")

describe("Water Bottle", function(){

  it("should be empty at start", function(){
    var bottle = new WaterBottle()
    assert.strictEqual(0, bottle.volume)
  })
})

describe("Water Bottle", function(){

  it("should be full when filled", function(){
    var bottle = new WaterBottle()
    bottle.fill()
    assert.strictEqual(100, bottle.volume)
  })
})

describe("Water Bottle", function(){

  it("should be empty when emptied", function(){
    var bottle = new WaterBottle()
    bottle.fill()
    bottle.empty()
    assert.strictEqual(0, bottle.volume)
  })
})

describe("Water Bottle", function(){

  it("should be go down by 10 when drunk", function(){
    var bottle = new WaterBottle()
    bottle.fill()
    bottle.drink()
    assert.strictEqual(90, bottle.volume)
  })
})

describe("Water Bottle", function(){

  it("should not go below 0", function(){
    var bottle = new WaterBottle()
    bottle.drink()
    assert.strictEqual(0, bottle.volume)
  })
})
