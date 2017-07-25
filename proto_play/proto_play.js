// var myPerson = Object.create(null);
//
// myPerson.walk = function() {
//   console.log("I am walking")
// }
//
// myPerson.walk()

// var wisePerson = {
//   wisdom: function() {
//     console.log("commits often")
//   }
// }
//
// var myPerson = Object.create(wisePerson)
// myPerson.walk = function() {
//   console.log("I am walking")
// }
//
// myPerson.wisdom()//inherating wisePerson thought myPerson

var Fish = function(name, color) {
  this.name = name
  this.color = color
}

Fish.prototype.swim = function() {
  console.log("Splash!")
}

var myFish = new Fish("Jamie", "Orange")
myFish.swim()
