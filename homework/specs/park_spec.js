var assert = require("assert")

var park = require("../park.js")
var Dino = require("../dino.js")



describe("Park", function(){

  var park;
  var Dino;

  beforeEach(function() {
    park = new Park()
    tyran = new Dino("Tyrannosaurus")
  })

  // it("Park has dino(tyrannosaurus)", function(){
  //   assert.strictEqual(park.dino, 1)
  // })
})
