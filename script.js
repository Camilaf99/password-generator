var password=document.getElementById ("password");

//const never changes but a var is always changing-a variable
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChars = "!@#$%^&*():-_=";
const numbers = "1234567890";
const minLength = 8;
const maxLength = 128;

function createPassword() {
 //parseInt transform any text in numbers. Let is a type of var, var is not used anymore
  let charOptions = generateCharacterArray();
  let numberOfChars = prompt("How many characters in total?");
  let passwordLength = parseInt(numberOfChars);
  if(passwordLength < minLength || passwordLength > maxLength) {
    alert("PASSWORD LENGTH DOESN'T MEET CRITERIA, TRY AGAIN");
    return "error";
  } else {
    var password ="";
    // i = 0; 0 < 8 -> 6; password = "" + g -> "g"; i = 1
    // i = 1; 1 < 8 -> 1; password = "g" + b -> "gb"; i = 2
    // i = 2; 2 < 8 -> 0; password = "gb" + a -> "gba"; i = 3
    //
    for(var i = 0; i < passwordLength; i++) {
      let randomCharacterPlace = Math.floor(Math.random() * charOptions.length);
      password = password + charOptions[randomCharacterPlace];
    }
    return password;
  }

}

// when calling generatecharacterarray returns an array of the options
function generateCharacterArray() {
  let includeLower = confirm("Include lowercase?");
  let includeUpper = confirm("Include uppercase?");
  let includeSpecial = confirm("Include special characers?");
  let includeNumber = confirm("Include numbers?");
  
  var result = [];
  
  if(includeLower) {
    result = result.concat(lowerCaseLetters.split(""));
  }
  if(includeUpper) {
    result = result.concat(upperCaseLetters.split(""));
  }
  if(includeSpecial) {
    result = result.concat(specialChars.split(""));
  }
  if(includeNumber) {
    result = result.concat(numbers.split(""));
  }
  return result;
}

document.getElementById("password").value = password; 

function copyPassword() { //this function is from https://dev.to/code_mystery/random-password-generator-using-javascript-6a //
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}

function rightPassword(){
  var password = createPassword();
  var passwordText = document.getElementById("password").value = password;

}

/*
 0  1  2 ...  25
[a, b, c,..., z] .length = 26
 0  1                         51
[a, b, c,..., z, A, B, C,..., Z] .length = 52 

[a, b, c,..., z, A, B, C,..., Z, !, ... #] .length = 58

1  -> b
24 -> y
0  -> a
50 -> Y
57 -> # 

opciones minusculas (abcdefghijklmnopqrstuvwxyz)
opciones mayusculas (ABCDEFGHIJKLMNOPQRSTUVWXYZ)
opciones special characters (!@#$%^&*():-_=)
opciones numeros (1234567890)




*/