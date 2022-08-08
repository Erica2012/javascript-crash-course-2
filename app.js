// LOGICAL OPERATORS
let num1 = 10;
let num2 = 20;
let num3 = "10";
let word1 = "Hello";
let word2= "hello";
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(!true);
console.log(!false);

// LOOPS

// for loop
for (let i= 1;i <=10;i++) {
    console.log(i);
}

// while loop
// for while loop the initializer is declared outside the parenthesis
// example
let num = 1;
while  (num <= 10) {
    console.log(num);
    num = num+ 1;
}

// do.....while loop
let age = 18;
do{
    console.log("You can't vote");
    age++;
}while (age < 18);

// Array methods
let ages = [20, 18, 17, 24, 27, 30, 29, 25, 23, 15];

for (let age of ages) {
    console.log(Math.pow(age, 2));
}
// // Filter
// let marriage = ages.filter(function (num ) {
//     return num > 25;
// } );
// console.log(marriage);

let marriage = ages.filter((mark) => mark > 25); 
console.log(marriage);

// map
let squares = ages.map((age) => age * age);
console.log(squares);

// find
let eighteen = ages.find((age) => age === 18)
console.log(eighteen);
