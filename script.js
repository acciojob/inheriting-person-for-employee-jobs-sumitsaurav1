// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
	
}
Person.prototype.greet= function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}
function Employee(name, age, jobTitle) {
	Person.call(this,name,age)
	this.jobTitle=jobTitle;
}
Employee.prototype=Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};
const person1 = new Person("John", 30);
person1.greet();
const employee1 = new Employee("Alice", 25, "Software Engineer");
employee1.greet(); 
employee1.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
