// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//This function takes any given number and determines if it is below, at, or above boiling point by using greater than/less than/equal to comparisons.
//The boiling point is 212 degrees Fahrenheit. 

//The input will be temperatures assigned to variables labeled temp1, temp2, and temp3.
 const temp1 = 42
 const temp2 = 350
 const temp3 = 212

const givenNumber = (temperature) => {
    if (temperature < 212) {
         return `${temperature} is below boiling point`
     } else if (temperature === 212) {
        return `${temperature} is at boiling point`
    } else if (temperature > 212) {
        return `${temperature} is above boiling point`
   }
 }
//Console.log will be used to display the return values of the function when executed. 
 console.log(givenNumber(temp1))
 console.log(givenNumber(temp2))
 console.log(givenNumber(temp3))

//The expected output is a given number and its relation to boiling point (i.e.,number is: at boiling point, below boiling point, above boiling point):
//42 is below boiling point
//350 is above boiling point
//212 is at boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

//This code combines two assigned arrays and returns the total length. 
//The arrays will be named myNumbers1 and myNumbers2, and will contain the same amount of numbers. 

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

//Console.log will be used to display the output with concatenation and length methods implemented. 
console.log(myNumbers1.concat(myNumbers2).length)
//The expected output is: 10 


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ovarB"

//This code reverses the letters of the given string, "Bravo 2022". The string will be contained in the variable called currentCohort. 
const currentCohort = "Bravo 2022"
//Console.log will be used to display the output with split and join methods implemented. 
console.log(currentCohort.split("").reverse().join(""))
//The expected output is: 2022 ovarB


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

//This JavaScript statement evaluates whether each number in a given array is even or odd. 
//The array will be named myArray. 
  const myArray = [13, 34, 5, 10, 27, 42]
//An if/else statement will be used to determine if the numbers are even or odd. 
 for(let i = 0; i < myArray.length; i ++){
     if (myArray[i] % 2 == 0){
      console.log ("even")
  }else{
      console.log ("odd")
  }
  }
// //The expected output is: 
// odd 
// even 
// odd 
// even 
// odd 
// even


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

//This function takes in a set of any two numbers and subtracts the smaller number from the larger number, giving the difference. Two sets of variables are provided, with set one including number1 and number2, and set two including number3 and number4. 
// Set one:
 const number1 = 58
  const number2 = 100

// Set two:
 const number3 = 27
  const number4 = 24

// //The function will be called subtractNumbers. 
 const subtractNumbers = (number1,number2,number3,number4) => {
//An if/else statement is used to determine which numbers are greater than or less than. 
     if(number1 > number2){
        return number1 - number2
     }else if(number2 > number1){
        return number2 - number1
    }
  }
//Console.log will be used to display the outputs as differences. 
  console.log(subtractNumbers(number1,number2))
  console.log(subtractNumbers(number3,number4))
//The expected output is: 
//42
//3

