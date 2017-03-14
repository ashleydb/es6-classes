/*
// Understanding some basics of functions, inlcuing apply() and arguements

// Defining some parameters on this function.
function one(name, location) {
  console.log(name, location);
}

// No params defined for this function, but can still recieve them
function two() {
  // arguements is an automatic variable that the function can access with any args passed in.
  console.log('Args', arguments);
  // See below for explanation. one() will split up the args into the defined params.
  one.apply(undefined, arguments);
}

// Passing args into a function that hasn't explicitly defined any params
two('Ash', 'London');
// Same as above. Passing undefined for the object to use as 'this', like with bind()
two.apply(undefined, ['Louise', 'SF']);
*/

// Higher Order functions: Is a function, takes a function as its argument, returns a function.

// Arrow function
var add = (a, b) => a + b;

// Higher order function
var callAndLog = (func) => {
  return function () {
    var res = func.apply(undefined, arguments);
    console.log('Result is ' + res);
    return res;
  }
}

// Setup our HOF to call add and log the result
var addAndLog = callAndLog(add);

// Using the basic add() - output is "100"
console.log(add(99, 1));

// Using our HOF - output is "Result is 300"
addAndLog(100, 200);

// Showing we still get the results back from add - output is "Result is 3" and "3"
console.log(addAndLog(1, 2));

// Another challenge example
var square = (a) => a * a;
var squareAndLog = callAndLog(square);
squareAndLog(3);
