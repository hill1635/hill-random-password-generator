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
  var master = [];

  function generatePassword() {
    // Is this necessary?
    function passwordLength() {
      if (letterCount > 0) {
        var passLength = parseInt(letterCount);
        return passLength;
      } else {
        console.log("letters: No");
      }
    }

    // function addCharacters() {
    //   if (upperCase == true) {
    //     for (var i of letters) {
    //       letters[i].toUpperCase();
    //       master.push(i);
    //     }
    //   }

      if (lowerCase == true) {
        for (var i of letters) {
          master.push(i);
        }
      }

      if (includeNumbers == true) {
        for (var i of numbers) {
          master.push(i);
        }
      }

      if (uniqueCharacters == true) {
        for (var i of characters) {
          master.push(i);
        }
      }
      console.log(master);
      return master;
    }
    var passArray = addCharacters();
    console.log(passArray);

    // This seems good. Use this for master list to consolidate functions.
    function passGen() {
      var arrayTest = [];
      for (let i = 0; i < letterCount; i++) {
        var randomRandomizer = rMaster[Math.floor(Math.random() * rMaster.length)];
        console.log(randomRandomizer);
        arrayTest.push(randomRandomizer);
      }
      console.log("arrayTest: ", arrayTest);
      return arrayTest;
    }
    var passyGeny = passGen()
    console.log(passyGeny);

    // Code to randomly choose randomly chosen indexes from different categories.
    // Use for loop until it meets letterCount number
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
