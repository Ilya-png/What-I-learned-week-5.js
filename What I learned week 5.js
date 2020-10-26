What-I Have learnt week 5.
The filter() Array method creates a new array with elements that fall under a given criteria from an existing array:
var numbers = [1, 3, 6, 8, 11];
var lucky = numbers.filter(function(number) {
  return number > 7;
});
// [ 8, 11 ]
The example above takes the numbers array and returns a new filtered array with only those values that are greater than seven.
Filter syntax
var newArray = array.filter(function(item) {
  return condition;
});
The item argument is a reference to the current element in the array as filter() checks it against the condition. This is useful for accessing properties, in the case of objects.
If the current item passes the condition, it gets sent to the new array.
Filtering an array of objects
A common use case of .filter() is with an array of objects through their properties:
let heroes = [
    {name: “Batman”, franchise: “DC”},
    {name: “Ironman”, franchise: “Marvel”},
    {name: “Thor”, franchise: “Marvel”},
    {name: “Superman”, franchise: “DC”}
];
var marvelHeroes =  heroes.filter(function(hero) {
    return hero.franchise == “Marvel”;
});
 For loops
The for statement is a type of loop that will use up to three optional expressions to implement the repeated execution of a code block.
Let’s take a look at an example of what that means.
for (initialization; condition; final expression) {
    // code to be executed
}
In the syntax above there are three expressions inside the for statement: the initialization, the condition, and the final expression, also known as incrementation.
Let’s use a basic example to demonstrate what each of these statements does.
forExample.js
// Initialize a for statement with 5 iterations
for (let i = 0; i < 4; i++) {
    // Print each iteration to the console
    console.log(i);
}




