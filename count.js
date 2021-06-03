//let currentDate = new Date ().getTime(); // ik weet niet goed wat die getTime doet, geeft een nummer in tegenstelling tot de datum
//let RandomDate = new Date ('2022-06-01').getTime(); // hier ook dus
// let count = RandomDate - currentDate; // resultaat is een nummer

// hieronder standaard berekeningen - die zijn dus ok - die gooien we ook even in de functie

/*var days = Math.floor(count / (1000 * 60 * 60 * 24));
var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((count % (1000 * 60)) / 1000);

console.log(currentDate); // nummer
console.log(RandomDate); // nummer
console.log(count); // nummer
console.log(days,hours,minutes,seconds); // klopt*/

/*var x =*/ setInterval(function() {
    let currentDate = new Date ().getTime();
    let RandomDate = new Date ('2022-06-01').getTime();
    let count = RandomDate - currentDate;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(count / (1000 * 60 * 60 * 24));
    var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((count % (1000 * 60)) / 1000);

    console.log(days,hours,minutes,seconds) // CTRL + C om da spel stop te zetten
      
    // Output the result in an element with id="demo"
    /*document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }*/
  }, 1000);
