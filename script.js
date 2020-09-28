// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var letterCount = prompt("How many letters?");
  var upperCase = confirm("Do you want to include upper case letters?");
  var lowerCase = confirm("Do you want to include lower case letters?");
  var numbers = confirm("Do you want to include numbers?");
  var uniqueCharacters = confirm("Do you want to include unique characters?");

  function generatePassword() {
    if (letterCount > 0) {
      console.log("letters: Yes");
    } else {
      console.log("letters: No");
    }

    if (upperCase == true) {
      console.log("UC: Yes");
    } else {
      console.log("UC: No");
    }

    if (lowerCase == true) {
      console.log("LC: Yes");
    } else {
      console.log("LC: No");
    }

    if (numbers == true) {
      console.log("Num: Yes");
    } else {
      console.log("Num: No");
    }

    if (uniqueCharacters == true) {
      console.log("Unique: Yes");
    } else {
      console.log("Unique: No");
    }

  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
