var assert = require("assert")
var park = require("../park.js")
var Dino = require("../dino.js")

describe("Park", function() {

  var park
  var tyran
  var dilop
  var veloc
  var trice

  beforeEach(function() {
    park = new Park()
    tyran = new Dino("tyrannosaurus", 3)
    dilop = new Dino("dilophosaurus", 2)
    veloc = new Dino("velociraptor", 3)
    trice = new Dino("triceratops", 3)
  })

  it("Park has no dinos at start", function() {
    assert.strictEqual(park.cage, 0)
  })

  it("add dino to cage", function() {
    park.addDino(tyran)
    assert.strictEqual(park.cage.length, 1)
  })

  it("remove dino by any type", function() {
    park.addDino(tyran)
    park.addDino(dilop)
    park.addDino(veloc)
    park.addDino(trice)
    park.removeDinoByType("tyrannosaurus")
    park.removeDinoByType("velociraptor")
    assert.strictEqual(park.cage.length, 2)
  })

  it("remove dino by avg of eggs per year", function() {
    park.addDino(tyran)
    park.addDino(dilop)
    park.addDino(veloc)
    assert.strictEqual(park.dinoHasMoreEggs(2).length, 2)
  })

  it("clac number of eggs after 2 years", function() {
    park.addDino(dilop)
    assert.strictEqual(park.calcDino(2), 10)
  })

})
