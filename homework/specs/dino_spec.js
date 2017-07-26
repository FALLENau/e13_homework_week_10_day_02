var assert = require("assert")
var Dino = require("../dino.js")

describe("Dino", function(){

  var tyrannosaurus

  beforeEach(function() {
    tyrannosaurus = new Dino("tyrannosaurus", 3)
  })

  it("Dino has type", function(){
    assert.strictEqual(tyrannosaurus.type, "Tyrannosaurus")
  })

  it("how many eggs a year", function(){
    assert.strictEqual(tyrannosaurus.eggsAYear, 3)
  })
})
