let currentDate = new Date ();
let RandomDate = new Date ('2021-06-01');
let count = RandomDate - currentDate;

var days = Math.floor(count / (1000 * 60 * 60 * 24));
var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((count % (1000 * 60)) / 1000);

console.log(currentDate);
console.log(RandomDate);
console.log(count);
console.log(days,hours,minutes,seconds);

let i=0;

//setInterval (function() {i++, console.log(minutes)}),10000; LAPTOP GOES LOCO WITH THIS

var myfunc = setInterval(function() {i++

document.getElementById("days").innerHTML = days + "d "
document.getElementById("hours").innerHTML = hours + "h " 
document.getElementById("mins").innerHTML = minutes + "m " 
document.getElementById("secs").innerHTML = seconds + "s" },5000);