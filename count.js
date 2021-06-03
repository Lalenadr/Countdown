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
    document.getElementById("demo").innerHTML = days + " Days " + hours + " Hours "
    + minutes + " Minutes " + seconds + " Seconds";
      
    // If the count down is over, write some text 
    /*if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }*/
  }, 1000);

  let secondHand=document.querySelector("#sec");  
        let minHand=document.querySelector("#min")  
        let hourHand=document.querySelector("#hr")  


        setInterval(clockRotating,1000)  

        function clockRotating(){  
            var date=new Date();  
            var getSeconds=date.getSeconds()/60;  
            var getMinutes=date.getMinutes()/60;  
            var getHours=date.getHours()/12  

            secondHand.style.transform="rotate("+getSeconds*360 + "deg)"  
            minHand.style.transform="rotate("+getMinutes*360 + "deg)"  
            hourHand.style.transform="rotate("+getHours*360 + "deg)"  

            document.querySelector(".current-day").innerHTML=date.toDateString()  
            document.querySelector(".current-seconds").innerHTML=date.getSeconds()  

        }  
