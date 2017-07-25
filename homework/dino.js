var Dino = function(name, avg){
  this.name = name
  this.eggsAYear = avg
  this.eggs = []
}

var dino1 = new Dino("Tyrannosaurus", 2)
var dino2 = new Dino("Velociraptor", 6)
var dino3 = new Dino("Triceratops", 3)

Dino.prototype.layEgg = function(){
  this.eggs.push() {1 * dino1.avg}
}

dino1.layEgg()

console.log(dino1.eggs)

module.exports = Dino
