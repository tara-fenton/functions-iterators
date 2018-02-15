/* ============ BEFORE YOU GET STARTED ============ */

/* here is a very short function that pops up an alert window that says 'Hello!' */
function hello() {
  alert('Hello!');
}

/* Here's the steps to test it:

- Open index.html in chrome.
- Type the keyboard shortcut `cmd + option + j`. Dev tools should open to the console.
- You should see the message saying 'starter.js is connected!'
- Underneath that, next to the blue arrow, type `hello()` to call the `hello` function
- You should get an alert window that says HELLO!

*/

/* ================= AS YOU COMPLETE EACH STEP ============= */

/* After each step, perform the following commands in the terminal:
1. git add .
2. git commit -m "add completed part PART-NUMBER-HERE"
This will help us track your progress and it will give you practice writing good commit messages!!
*/

/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */
/* ======================= WRITE YOUR ANSWERS HERE!!!!! =============== */
/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */

// PART 0: Just DO it!!
function justDoIt(name){
  console.log(name + ", JUST DO IT!");
}
justDoIt("TARA");


// PART 1: Big or Small String?
function bigOrSmallString(str) {
  if (str.length > 10) {
    return "This word is loooooong!";
  } else {
    return "This word is short";
  }
}

// PART 2: Odd or Even String Length??
function oddOrEvenString(str) {
  if (str.length%2 === 0) {
    return "This string length is TOTALLY even!";
  } else {
    return "This string's length is odd..";
  }
}

// PART 3: Median



// PART 4: Sum Array



// PART 5: Vowel Count


/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');
