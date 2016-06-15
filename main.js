//var irek = 4;
//var irek2 = prompt("Podaj wartość", "wartość");
//console.log(irek > irek2);


//var name = "Irek";
//var secondName = prompt("Podaj imię", "imię");
//console.log( name === secondName);


/*var myAge = prompt("Ile masz lat?", "Podaj wiek");
if(myAge >= 18){
	console.log("Jesteś pełnoletni/a");
}
else if(myAge < 18){
	console.log("jesteś dzieciak");
}
else if(typeof(myAge) != "number"){
	console.log("to nie jest liczba gamoniu!!!");
}*/

/*var a = 0;
var number = 2;

while (a < 12){
	console.log(number);
	number = number * 2;
	a++;
}

do {
	var yourName = prompt("Kto tam?") ;
} while (!yourName);
alert("Siema, " + yourName + "!");

for (var number = 0; number <= 10; number += 2) { 
	console.log(number);
}

var dziubek = "*";

for (var choinka = 0; choinka <= 50; choinka +=1){
  console.log(dziubek);
  dziubek += "*";
}

for (var number = 1; number <= 100; number += 1) { 
  if (number % 3 === 0 && number % 5 ===0){
    console.log("Ferdek Kiepski");
  }
  else if (number % 3 === 0){
    console.log("Ferdek");
  }
  else if (number % 5 === 0){
    console.log("Kiepski");
  }
  else{
    console.log(number);
  }
}


function mojaFunkcja (num1, num2){
  return (num1 * num2) - (num1 + num2)
}

function myName(name){
  var myName = name;
 
  function alertName(){
    alert("Hello " + myName);
  }
 
  function logName(){
    var myName = "Trolololo";
    console.log("Hello " + myName);
  }
 
  alertName();
  logName();
}
myName("Bart");
*/
//var symbol = prompt("Wprowadź symbol");
//var number = prompt("podaj wysokość", "liczna");
/*
function draw(symbol, number){
  var symbol = prompt("Wprowadź symbol");
  var number = prompt("podaj wysokość", "liczna");
  var krzaczek = symbol;
  for (var choinka = 0; choinka <= number; choinka += 1){
    console.log(krzaczek);
    krzaczek += symbol ;
  }
}

draw()

zad 1

function min (num1, num2){
  var num1 = parseInt(prompt ("Podaj 1 liczbę"));
  var num2 = parseInt(prompt ("Podaj 2 liczbę"));
  console.log(Math.max(num1, num2));
}
min();*/

//zad2

/*function maxOfThree (num1, num2, num3){
  var num1 = parseInt(prompt ("Podaj 1 liczbę"));
  var num2 = parseInt(prompt ("Podaj 2 liczbę"));
  var num3 = parseInt(prompt ("Podaj 3 liczbę"));
  if (num1<num2){
    if(num2<num3){
      console.log(num3);
    }
    else{
      console.log(num2);
    }
  }
  else if(num1<num3){
    console.log(num1);
    }
  else{
    console.log(num1);
  }
}
maxOfThree();


//zad3

function zeroPoints(a, b, c){
  var a = parseInt(prompt("Podaj współczynnik a"));
  var b = parseInt(prompt("Podaj współczynnik b"));
  var c = parseInt(prompt("Podaj współczynnik c"));
  var delta = (Math.pow(b, 2)-4*a*c);
  if (delta > 0){
    var x1 = (-b-Math.sqrt(delta))/(2*a);
    var x2 = (-b+Math.sqrt(delta))/(2*a);
    console.log(x1);
    console.log(x2);
  }
  else if (delta === 0){
    var x0 = -b/(2*a);
    console.log(x0);
  }
  else{
    console.log("brak miejsc zerowych");
  }
}
zeroPoints();


//zad 4

function samogloska(litera){
  var litera = prompt("podaj literę");
  switch (litera){
    case "e":console.log("to jest to");
      break;
    case "y":console.log("to jest to");
      break;
    case "u":console.log("to jest to");
      break;
    case "i":console.log("to jest to");
      break;
    case "o":console.log("to jest to");
      break;
    case "a":console.log("to jest to");
      break;
    default:console.log("to jest spółgłoska półgłówku!!!");
  }
}
samogloska();

var friends = ["Kasia", "Monika", "Paweł"]
 
friends.splice(1, 0, "Irek", "Bart");
console.log(friends);


//ĆW 13 i 14
var friends = ["Kasia", "Monika", "Paweł", "Piotrek"];

function nameLog(tab){
  for (var i = 0; i < tab.length; i++){
    if(tab[i].charAt(tab[i].length-1) === "a"){ // jeden sposób na ogarnięcie ostatniej literki
      //(tab[i].slice(-1) === "a"){     //drugi sposób
      console.log("Pani "+tab[i]);
    }
    else{
      console.log("Pan "+tab[i]);
    }
  }
  return 0;
}
nameLog(friends);

var tab1 = ["Kasia", "Monika", ["Irek", "Piotr"], "Paweł"];

tab1[2].push("Bart");

function nameLog(tab){
  for (var i = 0; i < tab.length; i++){
    console.log(tab[i]);
  }
  return 0;
}
nameLog(tab1);

//Zad 1

var tablica = [1, 2, 3, 45, 65, 79];

if (Array.isArray(tablica) === true){
  console.log("to jest tablica");
}
else{
  console.log("to nie jest tablica");
}


//Zad 2+3
var values = ["string", 1, 1 < 2];

function tabLog(tab){
  for (var i = 0; i < tab.length; i++){
    console.log(tab[i]);
  }
  return 0;
}
tabLog(values);

var bool = values[values.length-1];
console.log(bool);

//ZAD 4
var tab1 = [16, "cars"];
var tab2 = [3, "transformers", "brick", 1 < 2, 2 < 1, "plane"];
var tab3 = [tab1, tab2];
var dlug = tab2.length;
console.log(tab3[1][dlug-2]);

//zad 5
//alert(tab2[0]+(" ")+tab2[1]);

//zad 6
var tablica = [1, 2, 3, 4, "test", "javascript", "car", true];
function isInteger(tab){
  for (var i = 0; i < tab.length; i++){
    if (typeof tab[i] === "number"){
      console.log(tab[i]);
    }
  }
}
isInteger(tablica);


//zad 7

var tablica = [1, 2, 3, 4, "test", "javascript", "car", true];

function pierwElem(tab, ilZnak){
  if (typeof ilZnak === "number"){

    for ( i = 0; i  < ilZnak; i++) {
      console.log(tab[i]);
    }
  }
    else {
      console.log(tab[0]);
    }
}

pierwElem(tablica);

//zadanie dla chetnych 

var tablica = ["A", "B", "C", "D", "E", "F"];

console.log(tablica.join(" ^ "));

var friends = [];

function addObjects(tab, firstName, secondName, age, sex){
  if (sex !="m" && sex != "f"){
    sex = "m";
  }
  var person = {
    firstName: firstName,
    lastname: secondName,
    age: age,
    sex: sex,
  }
  tab.push(person);
  console.log(person);
}

addObjects(friends, "Mat", "Sit", 12, "m");
addObjects(friends, "Mat", "Kliś", 12, "g");
addObjects(friends, "Karolina", "Kacz", 12, "f");
addObjects(friends, "Ania", "zołza", 12, "f");
addObjects(friends, "Edek", "pipa", 12, "m");
addObjects(friends, "Zuzia", "japa", 12, "f");
addObjects(friends, "Frasia", "dupa", 12, "f");


var friends = [];

function addObjects(tab, firstName, secondName, age, sex){
  if (sex !="m" && sex != "f"){
    sex = "m";
  }
  var person = {
    firstName: firstName,
    lastname: secondName,
    age: age,
    sex: sex,
  }
    tab.push(person);
    if (person.sex === "f"){
      console.log(person);
    }
    else{
      return 0;
    }
}


addObjects(friends, "Mat", "Sit", 12, "m");
addObjects(friends, "Mat", "Kliś", 12, "g");
addObjects(friends, "Karolina", "Kacz", 12, "f");
addObjects(friends, "Ania", "zołza", 12, "f");
addObjects(friends, "Edek", "pipa", 12, "m");
addObjects(friends, "Zuzia", "japa", 12, "f");
addObjects(friends, "Frasia", "dupa", 12, "f");



var cars = {
    fenzo: {
        brand: "Ferrari",
        model: "Enzo",
        price: 3000000,
        exotic: true,
        acceleration: 3
    },
    f360: {
        brand: "Ferrari",
        model: "360",
        price: 20000,
        exotic: false,
        acceleration: 3
    },
    f126p: {
        brand: "Fiat",
        model: "126p",
        price: 1000,
        exotic: false,
        acceleration: 35
    }
}
for (var key in cars){
  var object = cars[key];
  if (object.exotic){
    console.log(object);
  }
}
*/
var cars = {
    fenzo: {
        brand: "Ferrari",
        model: "Enzo",
        price: 3000000,
        exotic: true,
        acceleration: 3
    },
    f360: {
        brand: "Ferrari",
        model: "360",
        price: 20000,
        exotic: false,
        acceleration: 3
    },
    f126p: {
        brand: "Fiat",
        model: "126p",
        price: 1000,
        exotic: false,
        acceleration: 35
    }
}
for (var key in cars){
  var object = cars[key];
  object.acceleration +=5;
  console.log(object);
}



























