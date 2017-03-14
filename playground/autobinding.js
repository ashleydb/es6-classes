var obj = {
  name: 'Ash',
  printName: function() {
    console.log(`My name is ${this.name}.`);
  }
}

obj.printName();
setTimeout(obj.printName, 1000); // obj will be undefined, (this will be undefined within obj)
setTimeout(obj.printName.bind(obj), 1000); // Makes sure obj stays as 'this'
setTimeout(obj.printName.bind({name: 'Mike'}), 1000); // Using a different object for 'this'
