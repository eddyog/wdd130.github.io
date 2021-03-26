
window.addEventListener('load', () => {
    let temp = document.getElementById("temp").innerHTML;
    let wind = document.getElementById("speed").innerHTML;
    
 if (temp <= 50 && wind > 3) {
    let chill = 35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * (temp * (wind ** 0.16)));
    console.log(chill);
    document.getElementById("chill").innerHTML = `${Math.round( chill * 100 )/100} *F`;
     }
 else {	
     console.log("N/A");
     document.getElementById("chill").innerHTML = ("N/A");
 }
 
 });
 