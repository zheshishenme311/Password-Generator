// Assignment Code
var lowerCase, upperCase, numberCase, specialCase, myLength;
var generateBtn = document.querySelector("#generate");
var cpyButton = document.querySelector("#cpyButton");



// Write password to the #password input
function writePassword() {
  lowerCase = document.getElementById("lowerCase").checked;
  upperCase = document.getElementById('upperCase').checked;
  numberCase = document.getElementById('numberCase').checked;
  specialCase = document.getElementById('specialCase').checked;
  mylength = document.getElementById('mylength').value;
  
  var myPasswordCharacters = '';
  if( lowerCase )
    myPasswordCharacters += "abcdefghijklmnopqrstuvwxyz";
  if( upperCase )
    myPasswordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if( numberCase )
    myPasswordCharacters += "0123456789";
  if( specialCase )
    myPasswordCharacters += "~!@#$%^&*()_+";

  console.log(` mylength='${mylength}' ${myPasswordCharacters}` );

  var newPassword = '';
  for( var i=0; i<mylength; i++ ){
    // randomly pick a character and add to the new password
    var newCharIdx = Math.floor( Math.random()*myPasswordCharacters.length );
    newPassword += myPasswordCharacters[newCharIdx];
  }

  console.log( ` .. generated password: ${newPassword}` );
  // var password = generatePassword();
  document.querySelector("#password").innerHTML = newPassword; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(cpyButton);
cpyButton.addEventListener("click", myFunction);

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
  console.log("ssss");

  /* Alert the copied text */
  //alert("Copied the text: " + copyText.value);
}