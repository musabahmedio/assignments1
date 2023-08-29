// CHAPTER 12
// QUESTION NO 1 #2
// var b = prompt("enter your  city name  ");
// var c = b.toLocaleLowerCase(b);
// console.log(c);

// QUESTION NO 3

// var b = prompt("enter your  city name  ");
// var c = b.toLocaleUpperCase(b);
// console.log(c);

// QUESTION NO 4
// var a = "Hello World";
// var b = a.toLocaleLowerCase();
// console.log(b);

// // question no 5
// var a = "hello world";
// var b = a.t(a);
// console.log(b);

// CHAPTER 22 to 25

// question no 1

// var a = "captain";
// var b = a.slice(1, 3);
// console.log(b);

// var a = "hello world";
// var b = a.indexOf(a);
// console.log(b);

// questio no 4

// var a = "hello world";
// var b = a.length;
// var c = b;
// console.log(c);

// question 5
// var a = "hello world";
// var b = a.length;
// var c = a[0] + a.slice(-3);
// console.log = c;

// question no 5
// var text = "to be or not to be";
// var index = text.indexOf("be");
// console.log(index);

// the value of index is 3

// question no 6

// var text = "to be or not to be";
// var index = text.lastIndexOf("be");
// console.log(index);
// the value  of index is 16

// question no 
// var str = "hello world";
// var i=7 
// if (str.length>i) {
//   console.log("false")
// } else {
//   console.log("true")
// }

// question no 13
// var text = "hello world ";
// var cha = text.charAt(4);
// console.log(cha);

// question no 16
// var a =
//   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam explicabo quasi cupiditate expedita quae corrupti the one II repudiandae molestiae blanditiis voluptatibus aperiam unde saepe illo laudantium aliquam hic nobis laboriosam, quod maiores";

// var b = a.replace("one ", "qweqweqew");
// console.log(b);

// chapter no 26
// question no 1 & 2
// var a = 10.6;
// var b = Math.round(a);
// console.log(b);

// question no 3

// var a = 10.3;
// var b = Math.round(a);
// console.log(b);

//  chapter no 27

// question no 1

// var random = Math.random();
// var b = Math.floor(random * 50) + 1;
// console.log(b);

// question no 4

// var num = Math.random();
// var num2 = Math.round(num);
// if (num2 > 0) {
//   console.log("head");
// } else {
//   console.log("tail");
// }

// chapter 28 and29

// question no 1 and

// var stringnmber = "123";
// var integernmber = Number(stringnmber);
// console.log(integernmber);

// question nmbeer 2
// var stringnmber = "14.3";
// var floatValue = parseInt(stringnmber);
// console.log(floatValue);

// question no 3
// var stringnmber = "14.3";
// var floatValue = parseFloat(stringnmber);
// console.log(floatValue);

// question no 5
// var nmber = 42;
// var nmberasstring = nmber.toString();
// console.log(nmberasstring);

// chapter no 30

// question no 1
// var num = 3.3454667;
// var newnum = Number(num.toFixed(3).toString());
// console.log(newnum);

// question number 2
// var num = 5.60976;
// num = parseFloat(num.toFixed(2));
// var numberasstring = num.toString();
// num = parseFloat(numberasstring);
// console.log(num);

// chapter 31 34
// question no 1
// var a = new Date();
// console.log(a);

// question no 2
// var a = new Date();
// var b = a.toString();
// console.log(b);

// question no 3/
// var d = new Date();

// var daysOfWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// var dayIndex = d.getDay();
// var day = daysOfWeek[dayIndex];
// console.log(day);

// question no 4
// var d = new Date();

// var daysOfWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// var dayindex = d.getDay();
// var currentdayname = daysOfWeek[dayindex];
// alert("today is" + currentdayname + dayindex);

// question no6
// var date = new Date(2020, 11, 0);
// console.log(date);

// question no 7
// var date = new Date(1992, 1, 2);
// console.log(date);

// question 9
// const originaldate = new Date("2023-8-28");
// const newyear = 2024;
// originaldate.setFullYear(newyear);
// console.log(originaldate);

// chapter 35 37
// question no 2

// var usernam = "hammad";
// function askname() {
//   var username = prompt();
// }
// console.log(username);

// question no 3

// Define the first function
// function sayhi() {
//   console.log("Hello!");
// }

// // Define the second function
// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// // Define a function that calls the other two functions
// function callFunctions() {
//   sayhi();
//   sayGoodbye();
// }

// // Call the function that calls the other two functions
// callFunctions();

// question no 15
// function checkWord(word, array) {
//   return array.includes(word);
// }

// const wordsArray = [
//   "zaid",
//   "haris",
//   "raza",
//   "abubakar",
//   "hassan",
//   "hussain",
//   "fatima",
// ];
// var wordToCheck = "raza";
// var isPresent = checkWord(wordToCheck, wordsArray);
// console.log(isPresent);

// chapter  no 38

// question no 1

// calculatesum(5, 7);
// function calculatesum(a, b) {
//   var result = a + b;
//   console.log(result);
// }

// question no2

// var globleVariable = "I am a globle variable";

// function accesgloblevarialbe() {
//   console.log(globleVariable);
// }
// accesgloblevarialbe();

// chapter 39 40

// question no 1
// var dayOfWeek = "Monday";

// switch (dayOfWeek) {
//   case "Monday":
//     console.log("It's the beginning of the workweek.");
//     break;
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//     console.log("It's a regular workday.");
//     break;
//   case "Friday":
//     console.log("It's almost the weekend!");
//     break;
//   case "Saturday":
//     breaks;
//   case "Sunday":
//     console.log("It's the weekend. Time to relax!");
//     break;
//   default:
//     console.log("Invalid day of the week.");
// }

// question no 2
// var cityName = prompt("Enter a city name:");

// switch (cityName.toLowerCase()) {
//   case "lahore":
//     alert("lahore!");
//     break;
//   case "karachi":
//     alert("You entered karachi!");
//     break;
//   case "chicago":
//     alert("You entered Chicago!");
//     break;
//   case "haydrabad":
//     alert("You entered heydarabad!");
//     break;
//   default:
//     alert("City not recognized. Please try again.");
//     break;
// }
