//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function Person(name, age) {
	this.name = name;
	this.age = age;
}

//Now create three instances of Person with data you make up

  //code here
var person1 = new Person('Mike', 29);
var person2 = new Person('Beck', 17);
var person3 = new Person('Stacy', 89);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function() {
	return this.name;
}

console.log(person1.sayName());