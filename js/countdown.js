var countDownDate = new Date("May 18, 2018 12:00:00").getTime();


var x = setInterval(function() {

    // HÃ¤mta dagens datum || Get todays date and time
    var now = new Date().getTime();
    
    // Ta reda pÃ¥ hur lÃ¥ngt det Ã¤r mellan lagt datum och dagens daturm ||  Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Tid utrÃ¤kningar ||  Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Visa resultatet i elementet med id ||  Output the result in an element with id="CountdownTimer"
    document.getElementById("CountdownTimer").innerHTML = " Tid kvar till karnevalen:<br>"+ days + " dagar " + hours + " timmar "
    + minutes + " minuter " + seconds + " sekunder " ;
    
    // Om nedrÃ¤kningen Ã¤r klar skriv nÃ¥got || If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("CountdownTimer").innerHTML = "Karnevalen har börjat!";
    }
}, 1000);