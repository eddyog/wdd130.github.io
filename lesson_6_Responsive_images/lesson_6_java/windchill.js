
window.addEventListener('load', (event) => {


    var high = document.getElementById("high").innerText;
    var speed = document.getElementById("speed").innerText;

//    var wind_chill = ((35.74 + (0.6215 * high)) - (35.75 * (Math.pow(speed,0.16)) + (0.4275 * high * (Math.pow(speed,0.16))) ));


    var wind_chill = 35.74 + 0.6215 * high +
                    (0.4275 * high - 35.75) * Math.pow(speed, 0.16);


     document.getElementById("wind_chill").innerHTML = wind_chill.toFixed(2);

}) 

