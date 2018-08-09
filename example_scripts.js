// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
// ----------------------------------
// This is a function that takes values from a form and prints them onto a page. It also takes any numerical values and it parses them into integers for using in mathmatical calculations. It takes those values and inserts them into an array then parses through them to see if their value is equal or less than 100.

function idCard(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    var address = document.getElementById("address").value;

    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAddress").innerHTML = address;

    var numberArray = [];
    numberArray.push(age, phoneNumber);
    // numberArray.push(parseInt(document.getElementById("phoneNumber")).value);

    var arrayLength = numberArray.length;
    for(var i = 0; i < arrayLength; i++){
        if(numberArray[i] <= 100){
            document.getElementById("postAge").innerHTML = "Age: " + age;
        } else {
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
        }
    }
}
// ----------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
// ----------------------------------
// This script takes the values from a form input and inserts them onto a pageXOffset. It also combines the values to create a string in this case a full name from a first name and last name input.

function nameInfo(){
    let firstName = document.getElementById('firstName').value;
    let middleName = document.getElementById('middleName').value;
    let lastName = document.getElementById('lastName').value;
    
    let fullName = firstName + ' ' + middleName + ' ' + lastName;
    
    document.getElementById("fullName").innerHTML = fullName;
  }
  nameInfo();
// ----------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
// ----------------------------------
// This script opens a prompt upon loading the page and it requests to input a value from the user which is a value from 1 - 100. It then runs the value inputGrade through a parser that outputs the numberGrade value. That numberGrade goes through a series of letterGrade possibilities and returns whatever grade it is less than or equal to. This is then alerted to the user.

var inputGrade = prompt("Enter a grade:");
var numberGrade = parseInt(inputGrade);
var letterGrade;

// Add your code below 
 if ( numberGrade >= 90 ) {
   letterGrade = 'A'
 } else if ( numberGrade >= 80 ) {
   letterGrade = 'B'
 } else if ( numberGrade >= 70 ) {
   letterGrade = 'C'
 } else if ( numberGrade >= 60 ) {
   letterGrade = 'D'
 } else {
   letterGrade = 'F'
 }
alert(letterGrade);
// ----------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  