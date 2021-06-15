// Assignment Code
var LowerCaseText = "abcdefghijklmnopqrstuvwxyz";
var UpperCaseText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var NumericText = "0123456789" ;
var SpecialText = "!@#$%^&*?" ;

var generateBtn = document.querySelector("#generate");

function writePassword() {
    options = "";
    password = "";

  var userChoice = window.prompt("Please Enter The Following Password Criteria as a comma seperated list: Lowercase, Uppercase, Numeric, Special");
  
  //This immediately cancels the generator if user exits. 
  if (!userChoice) {
    return;
  }

  var userLength = window.prompt("Enter a number between 8 and 128:");
  //This immediately cancels the generator if the user exits.
  if(!userLength){
    return;
  }
  
  //This if statement checks to see which boxes the user chose and assigns them to a variable "options". 
  if (userChoice.includes("Lowercase")){
        var options = options + LowerCaseText;
        console.log(options);
        
     }  
  if (userChoice.includes("Uppercase")){
        var options = options + UpperCaseText;

        console.log(options);
    
    }
 if (userChoice.includes("Numeric")){
        var options = options + NumericText;
        
       
    }
 if (userChoice.includes("Special")){
        var options = options + SpecialText;
        
    }
    //This code prints the users selected character set to the console, and its total length. 
    console.log(options);
    console.log(options.length);
    /*This loop generates the password. "i" acts as the counter, options.length is the characterset available, and userLength
    specifies the maximum length of the password. Options.charAt(Math.floor(Math.random() * n )) returns a random character within the 
    user-generated characterset var "options". 
    */
    for (var i = 0, n = options.length; i < userLength; i++) {
        password += options.charAt(Math.floor(Math.random() * n ));
       
    }
    
    console.log(options.length);
    console.log(password);
    
    // This declares the new password and sets it equat to a variable that traverses the DOM. This changes the area-label and replaces the 
    //placeholder with the generated password. 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
