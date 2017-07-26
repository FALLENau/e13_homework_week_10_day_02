
var Park = function(dino) {
this.cage = []
}

Park.prototype = {

  addDino: function(dino) {
    this.cage.push(dino)
  },

  removeDinoByType: function(type) {
    for (var i = this.cage.length -1; i >= 0; i--) {
      if (this.cage[i].type === type) {
        this.cage.splice(i, 1)
      }
    }
  }

  dinoHasMoreEggs: function(amount) {
    var foundDino = []
    for (var i = 0; i < this.cage.length; i++) {
      if (this.cage[i].eggsAYear > amount) {
        foundDino.push(this.cage[i])
      }
    }
    return foundDino
  },

  calcDino: function(years) {
    var total = 0
    for (dino of this.cage) {
      count = 1
      for (var i = 0; i < years; i++) {
        count += dino.eggsAYear * count
      }
      total += count
    }
    return total
  }

}

module.exports = Park
