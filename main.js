var money=1000
var fruits = ["Apple", "Orange","Pear","Banana","Melon"]; 

function roll() {
var roll1 = fruits[Math.floor(Math.random()*fruits.length)];
var roll2 = fruits[Math.floor(Math.random()*fruits.length)];
var roll3 = fruits[Math.floor(Math.random()*fruits.length)];

document.getElementById("roll1").innerHTML = roll1;
document.getElementById("roll2").innerHTML = roll2;
document.getElementById("roll3").innerHTML = roll3;

console.log(roll1, roll2, roll3)
}