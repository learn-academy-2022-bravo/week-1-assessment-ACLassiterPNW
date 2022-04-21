// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
//const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer: 
 //   5
// b) Verify and explain:
 //   The answer is 5 because the .push built-in method adds a value to the end of an array and returns the position of that value. 


// --------------------1) What will this log?

//const cohort = "LEARN 2022"
//console.log(cohort.length)

// a) Your answer:
   // This will log 10.
// b) Verify and explain:
 //   I have verified that this logs 10. This is because the .length property returns the length of the string, including spaces. 


// --------------------2) What will this log?

//const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer:
  //  This will log o. 
// b) Verify and explain:
 //   I have verified that this logs o. This is because the index [4] returns the index of the fourth value, counting from left to right, starting at zero. 



// --------------------3) What will this log?

//const languages = ["JavaScript", "Ruby", "Python", "C++"]
//const index = 1
//console.log(languages[index])

// a) Your answer:
   // This will log Ruby. 
// b) Verify and explain:
   // I have verified that this logs Ruby. This is because we have identified the first value in the array which is Ruby, with "JavaScript" being the in the 0 index position. 


// --------------------4) What will this log?

//const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer:
   // This will log SATURDAY, SUNDAY.
// b) Verify and explain:
  //  I received an error stating "weekendDays.toUpperCase is not a function". I believe this may be due to the fact that the string is within square brackets. Coded correctly, this string should be modified and returned as all capitalized letters. 


// --------------------5) What will this log?

//const dataTypes = ["number", "string", "Boolean"]
//console.log(typeof dataTypes.length)

// a) Your answer:
 //   I believe this will return "string", followed by the number of values in the variable, which would be 3.
// b) Verify and explain:
  //  This returns the word 'number', which I attribute to the length (3) being evaluated as the value type.