/******************************************************************************
WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!

All the assignment instructions are commented out so that you can write your 
code in between them. Remember to read the instructions CAREFULLY, write short 
comments for your code, and feel free to ask for help if you're stuck.

GOOD LUCK!
******************************************************************************/

/******************************************************************************
ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.

<-- Locate the index.html file in the file browser and link it to this file, 
javascript.js
******************************************************************************/

/****************************************************************************** 
ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the 
various data types. Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords
******************************************************************************/

//your code here
console.log("Javascript-Oppgave!");
// String ( Jeg har brukt av snake casing rule)
const user_name = "Gulshan_Kodehode" + "jobloop" + "javascript";
console.log(user_name);

// Number
let age = 30;
console.log(age);

num = 5.8;
console.log(num);

// Boolean
let isBook = true;
const hasReading = false;

// Array

let items = ["HTML", "CSS", "Javascript", "React", "Figma", "Design"];
console.log(items[2], items[4], items[1]);
console.log(items[0]);

/****************************************************************************** 
ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=)
******************************************************************************/

//your code here
// (plus, minus, dele, ganger)
let a = 20;
let b = 7;
let c = a + b;
console.log(" The value of c is" + c + ".");

console.log(3 - 1);

console.log(35 / 5);

let price = a * b;
console.log(price);

// Shorthand

let x = 20;
x++;
x--;
x += 4;
console.log(x);

let y = 25;
y -= 5;
console.log(y);

/****************************************************************************** 
ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks that userName isn't 
empty(""), that the user age is 18+, and that userIsBlocked is false. 

(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error 
message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly 
******************************************************************************/

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "home";

//your code here
if (userAge >= 18 && userName !== "" && userIsBlocked === false) {
  userName = "Peter";
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log(`Welcome ${userName}, You are successfully logged in.`);
} else {
  console.log("Error! You are not able to log in.");
}
console.log("User is logged in:", userIsLoggedIn);
console.log("Redirecting to:", goToPage);

/******************************************************************************
ASSIGNMENT 5

Make a variable called userTitle and set the content equal to "Mr." if userMale 
is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 
this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
******************************************************************************/

const userMale = false;

//your code here

const userTitle = userMale ? "Mr." : "Mrs."; // Ternary conditional
console.log(userTitle);

// let userTitle = "Mr.";
// console.log(userTitle);
