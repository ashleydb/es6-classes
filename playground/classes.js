// Syntax for classes in JavaScript
// Note, this isn't an object, despite looking like one with {}

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello there, I'm ${this.name}.`;
  }

  toString() {
    //return this.getGreeting();
    return JSON.stringify(this);
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}


class Child extends Person {
  // Adding new members to the class in the constructor
  constructor(name, age, like) {
    super(name, age); // Call parent's constructor
    this.like = like;
  }
  // Override behaviour
  getGreeting() {
    return `Hi, I'm ${this.name} and I like ${this.like}.`;
  }
}

class Baby extends Person {
  // Override behaviour
  getGreeting() {
    return `Waaaahhh!`;
  }
}

var me = new Person('Ash', 33);
console.log(me);
console.log(me.toString()); // Default behaviour is to print "[object Object]"
console.log(me.getGreeting());
console.log(me.getDescription());

var you = new Child('Freddie', 4, 'Hot Wheels');
console.log(you);
console.log(you.getGreeting());
console.log(you.getDescription());

var baby = new Baby('Beau', 2);
console.log(baby.getGreeting());
console.log(baby.getDescription());
