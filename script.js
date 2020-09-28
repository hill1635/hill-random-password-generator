// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "<", ">", "/", "?"];

// Write password to the #password input
function writePassword() {

  var letterCount = prompt("How many letters?");
  var upperCase = confirm("Do you want to include upper case letters?");
  var lowerCase = confirm("Do you want to include lower case letters?");
  var includeNumbers = confirm("Do you want to include numbers?");
  var uniqueCharacters = confirm("Do you want to include unique characters?");

  function generatePassword() {
    if (letterCount > 0) {
      console.log(letterCount);
    } else {
      console.log("letters: No");
    }

    function randomUpperCase() {
      if (upperCase == true) {
        var randomUpperLetter = letters[Math.floor(Math.random() * letters.length)];
        return randomUpperLetter;
      } else {
        console.log("UC: No");
      }
    }
  }
  var rUC = randomUpperCase();
  console.log(rUC);

  function randomLowerCase() {
    if (lowerCase == true) {
      var randomLowerLetter = letters[Math.floor(Math.random() * letters.length)];
      return randomLowerLetter;
    } else {
      console.log("LC: No");
    }
  }
  var rLC = randomLowerCase();
  console.log(rLC);

  function randomNumber() {
    if (includeNumbers == true) {
      var randomNum = numbers[Math.floor(Math.random() * numbers.length)];
      return randomNum;
    } else {
      console.log("Num: No");
    }
  }
  var rNum = randomNumber();
  console.log(rNum);

  function randomCharacter() {
    if (uniqueCharacters == true) {
      var randomChar = characters[Math.floor(Math.random() * characters.length)];
      return randomChar
    } else {
      console.log("Unique: No");
    }
  }
  var rChar = randomCharacter();
  console.log(rChar);

  // Code to randomly choose randomly chosen indexes from different categories.
  // Use for loop until it meets letterCount number
}

var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
