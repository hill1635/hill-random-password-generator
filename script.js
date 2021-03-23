var generateBtn = document.querySelector("#generate");
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "<", ">", "/", "?"];
var letterCount = prompt("How many characters?");
var upperCase = confirm("Do you want to include upper case letters?");
var lowerCase = confirm("Do you want to include lower case letters?");
var includeNumbers = confirm("Do you want to include numbers?");
var uniqueCharacters = confirm("Do you want to include unique characters?");
var master = [];

function addCharacters() {
  if (upperCase == true) {
    for (var i of upperLetters) {
      master.push(i);
    }
  }

  if (lowerCase == true) {
    for (var i of lowerLetters) {
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
  return master;
}

function addPassChar() {
  var passChar = [];
  for (let i = 0; i < letterCount; i++) {
    var randomChar = master[Math.floor(Math.random() * master.length)];
    passChar.push(randomChar);
  }
  return passChar;
}

function generatePassword() {
  master = addCharacters();
  var passCharArray = addPassChar();
  var passString = passCharArray.join("");
  return passString;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);