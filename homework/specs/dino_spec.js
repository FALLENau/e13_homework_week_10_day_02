var assert = require("assert")

var Dino = require("../dino.js")

describe("Dino", function(){

  it("Dino has name", function(){
    var dino = new Dino("Tyrannosaurus")
    assert.strictEqual(dino.name, "Tyrannosaurus")
  })

  it("Dino can lay egg", function(){
    var dino = new Dino("Tyrannosaurus")
    dino.layEgg()
    assert.strictEqual(dino.eggs.length, 1)
  })
})
