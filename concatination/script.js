// var name = prompt('Please enter your name');
// var newst = 'Prevent this page from creating additional dialogs';
// alert('Hi', name + `<input type="checkbox" /> ${newst}`);

// no 2
// var num = +prompt('Enter a number to print its multiplication table');

// document.write(
//   `
//     <h3>Multiplication table of ${num} is</h3>
//     <h4>${num} X 1 = ${num * 1} </h4>
//     <h4>${num} X 2 = ${num * 2} </h4>
//     <h4>${num} X 3 = ${num * 3} </h4>
//     <h4>${num} X 4 = ${num * 4} </h4>
//     <h4>${num} X 5 = ${num * 5} </h4>
//     <h4>${num} X 6 = ${num * 6} </h4>
//     <h4>${num} X 7 = ${num * 7} </h4>
//     <h4>${num} X 8 = ${num * 8} </h4>
//     <h4>${num} X 9 = ${num * 9} </h4>
//     <h4>${num} X 10 = ${num * 10} </h4>

// `
// );

//no 3
// var city = prompt('Please enter your city name');

//no 04
// var gender = prompt('Please enter your gender');
// if (gender == 'Male' || gender == 'male' || gender == 'MALE') {
//   alert('Good morning Sir');
// } else if (gender == 'Female' || gender == 'female' || gender == 'FEMALE') {
//   alert('Good morning Maam');
// } else {
//   alert('Wrong input');
// }

//no 05
// var signalcolor = prompt('Enter color of road traffic signal');
// if (signalcolor == 'red' || signalcolor == 'RED' || signalcolor == 'Red') {
//   document.write(`
//   <table border="1">
//   <tr>
//     <th>Signal Color</th>
//     <th>Message</th>
//   </tr>
//   <tr>
//   <td>${signalcolor}</td>
//     <td>Vehicles must stop</td>
//   </tr>
// </table>

//     `);
// } else if (
//   signalcolor == 'yellow' ||
//   signalcolor == 'YELLOW' ||
//   signalcolor == 'Yellow'
// ) {
//   document.write(`
//     <table border="1">
//     <tr>
//       <th>Signal Color</th>
//       <th>Message</th>
//     </tr>
//     <tr>
//     <td>${signalcolor}</td>
//       <td>Vehicles should get ready to move</td>
//     </tr>
//   </table>

//       `);
// } else if (
//   signalcolor == 'green' ||
//   signalcolor == 'GREEN' ||
//   signalcolor == 'Green'
// ) {
//   document.write(`
//       <table border="1">
//       <tr>
//         <th>Signal Color</th>
//         <th>Message</th>
//       </tr>
//       <tr>
//       <td>${signalcolor}</td>
//         <td>Vehicles can move now </td>
//       </tr>
//     </table>

//         `);
// }

//no 06

// var maxage = +prompt('Enter max age');
// var currentage = +prompt('Enter current age');

// if (currentage <= maxage) {
//   alert('You are welcome');
// } else {
//   alert('age is greater');
// }

//no 07

// var remfuel = +prompt('Enter remaining fuel in litres');
// if (remfuel <= 0.25) {
//   alert('Please refill fuel in the car');
// }
// else{
//     alert('fine')
// }

//no 08

// var a = 4;
// if (++a === 5) {
//   alert('given condition for variable a is true');
// }
//yes bcuz ++a is 5

// var b = 82;
// if (b++ === 83) {
//   alert('given condition for variable b is true');
// }
//false bcuz b++ is not 83

// var c = 12;
// if (c++ === 13) {
//   alert('condition 1 is true');
// }
// if (c === 13) {
//   alert('condition 2 is true');
// }
// if (++c < 14) {
//   alert('condition 3 is true');
// }
// if (c === 14) {
//   alert('condition 4 is true');
// }

// condition 2 and 4 is true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert('The cost equals');
// }
//true

// if (true) {
//   alert('True');
//}
// if (false) {
//   alert('False');
// }
//true bcuz false condtion will not compile

// if ('car' < 'cat') {
//   alert('car is smaller than cat');
// }
//car code is lesser

//no 09
// var engmarks = +prompt('Enter English marks');
// var phymarks = +prompt('Enter Physics marks');
// var chemmarks = +prompt('Enter Chemistry marks');

// var marksobt = engmarks + phymarks + chemmarks;
// var totalmarks = 300;
// var perc = (marksobt / totalmarks) * 100;
// var grade;
// var remarks;

// if (perc >= 80) {
//   grade = 'A-one';
//   remarks = 'Excellent';
// } else if (perc >= 70) {
//   grade = 'A';
//   remarks = 'Good';
// } else if (perc >= 60) {
//   grade = 'B';
//   remarks = 'Need more improvement';
// } else {
//   grade = 'Fail';
//   remarks = 'Sorry';
// }

// document.write(
//   `

//   <h2>MARKSHEET</h2>
//   <h3>Total Marks : ${totalmarks}</h3>
//   <h3>Marks Obtained : ${marksobt}</h3>
//   <h3>Percentage :  ${perc}%</h3>
//   <h3>Grade : ${grade}</h3>
//   <h3>Remarks : ${remarks}</h3>

//     `
// );

//no 10
// var nitem1 = prompt('Name of item1');
// var nitem2 = prompt('Name of item2');
// var pitem1 = +prompt('Price of item1');
// var pitem2 = +prompt('Price of item2');
// var qitem1 = +prompt('Quantity of item1');
// var qitem2 = +prompt('Quantity of item2');
// var shipchg = 200;
// var dis;
// var newtotal;
// var total = pitem1 * qitem1 + pitem2 * qitem2 + shipchg;
// if (total > 2000) {
//   dis = total * 0.1;
//  newtotal = total - dis;
// } else {
//   newtotal = total;
// }

// document.write(
//   `<h1>Shopping Cart </h1>
//     <br />
//     <br />
//     <h3>Price of ${nitem1} is ${pitem1}</h3>
//     <h3>Quantity of ${qitem1}</h3>
//     <h3>Price of ${nitem2} is ${pitem2}</h3>
//     <h3>Quantity of ${qitem2}</h3>
//     <h3>Shipping Charges ${shipchg}</h3>
//     <h3>Total cost of your order is ${total}</h3>
//     <h3>Discounted price is ${newtotal}</h3>`
// );

//no 11

// var num = Math.floor(Math.random() * 11); // from 0 to 10
// var guessn = +prompt('Guess a secret number');
// if (num === guessn) {
//   alert('Bingo! Correct answer');
// } else {
//   alert('Close enough to the correct answer.');
// }

//no 12
// var num = +prompt('Enter any number');
// if (num % 3 == 0) {
//   alert('Number is divisible by 3');
// } else {
//   alert('Number is not divisible by 3');
// }

//no 13
// var scr1 = +prompt('Enter score of TeamA');
// var scr2 = +prompt('Enter score of TeamB');
// if (scr1 > scr2) {
//   alert('TeamA have won the game');
// }
// else{
//   alert('TeamB have won the game');
// }

//no 14
// var nstr = prompt('Enter a string');
// var nnum = prompt('Enter a number');
// var nbol = prompt('Enter any boolean t or f');
// var check1 = typeof nstr;
// var check2 = typeof nnum;
// var check3 = typeof nbol;
// alert(`${nstr} is a ${check1}`);
// alert(`${nnum} is a ${check2}`);
// alert(`${nbol} is a ${check3}`);

//no 15
// var num1 = +prompt('Enter any number');
// if (num1 % 2 === 0) {
//   alert(`${num1} is a even number`);
// } else {
//   alert(`${num1} is a odd number`);
// }

//no 16
// var temp = +prompt('Enter temperature of your area');
// if (temp > 40) {
//   alert('It is too hot outside.');
// }
// if (temp > 30 && t <= 40) {
//   alert('The Weather today is Normal.');
// }
// if (temp > 20 && t <= 30) {
//   alert('Todays Weather is cool.');
// }
// if (temp > 10 && t <= 20) {
//   alert('It is too cool outside.');
// }

//no 17
// var num1 = +prompt('Enter any number');
// var num2 = +prompt('Enter any number');
// var expr = prompt('Enter any operation + - * / %');
// if (expr === '+') {
//   alert(`Addition of ${num1} + ${num2} is ${num1 + num2}`);
// } else if (expr === '-') {
//   alert(`Subtraction of ${num1} - ${num2} is ${num1 - num2}`);
// } else if (expr === '*') {
//   alert(`Multiplication of ${num1} * ${num2} is ${num1 * num2}`);
// } else if (expr === '/') {
//   alert(`Division of ${num1} / ${num2} is ${num1 / num2}`);
// } else if (expr === '%') {
//   alert(`Remender of ${num1} % ${num2} is ${num1 % num2}`);
// } else {
//   alert('Invalid input');
// }

//no 18
// var dayname = prompt('Enter any day name');
// if (dayname == 'Saturday') {
//   alert('Its weekend');
// }
// else if (dayname =='Sunday'){
//     alert('Its a holiday')
// }
// else{
//     alert('Its a week day')
// }

//no 19
// var x = +prompt('Enter you Score ');
// if (x > 50) {
//   alert('You are Passed');
// } else {
//   alert('Try Again');
// }

//no 20
// var x = +prompt("Enter a number ")
//     var y = +prompt("Enter a number ")
//     if(x>y){
//         document.write(`"The greater number of ${x} and ${y} is `+x)
//     }
//     if(x<y){
//         document.write(`"The greater number of ${x} and ${y} is `+y)
//     }
//     if(x===y){
//         document.write("Both number are equals.")
//     }

//no 21
// var x = prompt(`Enter a language code (e.g. "es", "de", "en") `);
// if (x == 'es') {
//   document.write('¡Hola, mundo!');
// }
// if (x == 'de') {
//   document.write('Hallo Welt!');
// }
// if (x == 'en') {
//   document.write(`Hello World`);
// }

//no 22
// var num = +prompt('Enter any signed number');
// if (num >= 0) {
//   alert('Entered number is positive');
// } else {
//   alert('Entered number is Negative');
// }

//n0 23
// var x = +prompt('please Enter a number ');
// var y = prompt('please Enter a noun ');
// alert(`${x} ${y}`);
