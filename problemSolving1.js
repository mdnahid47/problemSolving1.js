// 1. What will be the output of the following code and why?



// function scopeTest() {
//     if (true) {
//       var varVariable = "I am var";
//       let letVariable = "I am let";
//       const constVariable = "I am const";
//     }
//     console.log(varVariable);
//     console.log(letVariable);
//     console.log(constVariable);
//   }
  
//   scopeTest();

//   the output  this code  : I am var
//   ReferenceError: letVariable is not defined
//   ReferenceError: constVariable is not defined

//   cause varVariable accessable due to its function scope ,
//   letVariable and constVariable: Inaccessible due to their block scope. 
//   The console.log statements outside the if block cannot find these variables, resulting in ReferenceErrors.


// 2.Write a function greet that takes two parameters, name and greeting.
// greeting should have a default value of "Hello". If only the name is provided,
// the function should return the greeting followed by the name. If both are provided,
// it should return the custom greeting followed by the name.

// console.log(greet("Alice")); // "Hello, Alice!"
// console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"


// function greet(name, greeting = "Hello") {
//   
//   return `${greeting}, ${name}`;
// }

// 

// 4.Given the following arrays, use the spread operator to merge them into a new array mergedArray.
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// // Your code here
// console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// const mergedArray = [...array1, ...array2, ...array3];

// console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 5.Write an object person using the object literal syntax extensions.
// The object should have properties name and age, and a method greet that returns a greeting message.

// const name = "John";
// const age = 30;

// // Your code here
// console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."


// const person = {
//     name, 
//     age,  
//     greet() { 
//       return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
//     }
//   };

// 6.Write a for...of loop to iterate over the following array and print each element to the console.
// const fruits = ["apple", "banana", "cherry"];

// const fruits = ["apple", "banana", "orange"];

 // const fruits = ["apple", "banana", "orange"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// output : apple
// banana
// cherry

// 7.Use template literals to create a string that includes variables name and age.
// const name = "Alice";
// const age = 25;

// // Your code here
// const message = ``;
// console.log(message); // "My name is Alice and I am 25 years old."



// const name = "Alice";
// const age = 25;

// const message = `My name is ${name} and I am ${age} years old.`;

// console.log(message); // "My name is Alice and I am 25 years old."

// 8.You have an array of objects representing students and their grades.
// Use a for...of loop to iterate over the array and print each student's name and grade.


// const students = [
//     { name: "Alice", grade: 85 },
//     { name: "Bob", grade: 92 },
//     { name: "Charlie", grade: 78 },
//   ];
  
//   for (const student of students) {
//     console.log(`${student.name} - ${student.grade}`);
//   }
  

// 9.You have a nested array of numbers. Use a for...of loop to iterate over each inner array and print the sum of its elements.
// const nestedArrays = [[1, 2, 3],
//                      [4, 5, 6], 
//                      [7, 8, 9]];


// const nestedArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (const innerArray of nestedArrays) {
//   let sum = 0; // Initialize sum for each inner array
//   for (const number of innerArray) {
//     sum += number;
//   }
//   console.log(`Sum of inner array: ${sum}`);
// }
// 10.Use template literals to create a string that includes variables a and b, as well as the result of their addition.
// const a = 5;
// const b = 10;

// // Your code here
// const result = ``;
// console.log(result); // "The sum of 5 and 10 is 15."

// const a = 10;
// const b = 20;

// const message = `The sum of ${a} and ${b} is ${a + b}`;

// console.log(message); // Output: "The sum of 10 and 20 is 30"