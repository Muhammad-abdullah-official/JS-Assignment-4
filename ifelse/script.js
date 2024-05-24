// //no 01
// var x = +prompt('Enter your age ');
// if (x > 18) {
//   alert('Old enough');
// }
// if (x < 18) {
//   alert('Too Young');
// }

// //no 02

// var x = prompt('Enter your name ');
// var myname = 'Faizan';
// if (myname === x) {
//   alert('Hi ! Welcome have a nice day');
// }

// //no 03

// var x = +prompt('Enter a number ');
// var y = x % 3;
// switch (y) {
//   case 0:
//     alert('Number is divisible by 3');
//     break;
//   default:
//     alert('Number is not divisible by 3');
//     break;
// }

// //no 04
// var x = prompt('Enter a character ');
// var charCode = x.charCodeAt(0);
// if (charCode >= 65 && charCode <= 90) {
//   alert('You enter an Upper Case Letter');
// } else if (charCode >= 97 && charCode <= 122) {
//   alert('You enter a Lower Case Letter');
// } else {
//   alert('You enter a number');
// }

// //no 05
// var time = prompt('Enter a time ');

// if (time >= 0o0 && time <= 1200) {
//   alert('Good Morning');
// } else if (time >= 1200 && time <= 1700) {
//   alert('Good Afternoon');
// } else if (time >= 1700 && time <= 2100) {
//   alert('Good Evening');
// } else if (time >= 2100 && time <= 2359) {
//   alert('Good Night');
// }

// //no 06
// var year = prompt('Enter a year ');
// if (year % 4 == 0) {
//   alert('Its a leap year');
// } else {
//   alert('Not a leap year');
// }

// //no 07
// var pass = prompt('Enter your password:');
// if (pass == '') {
//   alert('Plz enter your password');
// } else if (pass == 'young123') {
//   alert('“Correct! The password you entered matches the original password”.');
// } else {
//   alert('Incorrect password' + pass);
// }

// //no 08
// var firstName = 'Ali';
// if (firstName === 'Fahad') {
//   document.write('Hello Fahad!');
// } else {
//   document.write('You are not Fahad');
// }

// //no 09
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = 'Good day';
//   alert(greeting);
// } else {
//   greeting = 'Good evening';
//   alert(greeting);
// }

// //no 13
// var x = +prompt('Enter a number:');
// var y = +prompt('Enter a number:');
// if (x > y) {
//   alert(`${x} is the gratest number`);
// } else if (x == y) {
//   alert(`Both numbers are equals`);
// } else {
//   alert(`${y} is the gratest number`);
// }

// //no 14
// var x = +prompt('Enter a number:');
// if (x > 0) {
//   alert('Number is Positive');
// } else if (x < 0) {
//   alert('Number is negitive');
// } else {
//   alert('Number is zero');
// }

// //no 15
// var c_hour = prompt('Enter the current hour:');
// if (c_hour > 6 && c_hour < 9) {
//   alert('BreakFast is served');
// } else if (c_hour > 11 && c_hour < 13) {
//   alert('Time for lunch');
// } else if (c_hour > 17 && c_hour < 20) {
//   alert('Its dinner time');
// } else {
//   alert("Sorry, you'll have to wait, or go get a snack.");
// }

// //no 16
// var x = prompt('Enter any type of variable');
// var check1 = typeof x;
// alert(`${x} is a ${check1}`);

// //no 17
// var c = prompt('Enter a character:');
// if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
//   alert('its a vowel');
// } else {
//   alert('it is not a vowel');
// }

// //no 18
// var x = 10;
// var y = 8;
// alert(x != y);

// //no 19
// var mont_number = +prompt('Enter number to check the name of month ');
// switch (mont_number) {
//   case 1:
//     alert('January');
//     break;
//   case 2:
//     alert('February');
//     break;
//   case 3:
//     alert('March');
//     break;
//   case 4:
//     alert('April');
//     break;
//   case 5:
//     alert('May');
//     break;
//   case 6:
//     alert('June');
//     break;
//   case 7:
//     alert('July');
//     break;
//   case 8:
//     alert('Auguest');
//     break;
//   case 9:
//     alert('September');
//     break;
//   case 10:
//     alert('October');
//     break;
//   case 11:
//     alert('November');
//     break;
//   case 12:
//     alert('December');
//     break;
//   default:
//     alert('Invalid month');
// }

// //no 20
// var x = +prompt('Enter your age ');
// var messege = x < 18 ? 'Too young' : 'Old enough';
// alert(messege);
