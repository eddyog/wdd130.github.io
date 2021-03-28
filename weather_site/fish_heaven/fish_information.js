
window.addEventListener('load', () => {

    fetch("https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=5b80935c4ea5e0ea9c17310ade26c1ed&units=imperial")
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('speed').textContent = jsObject.wind.speed + " mph";
        document.getElementById('humidity').textContent = jsObject.main.humidity + "%";
        document.getElementById('current').textContent = jsObject.weather[0].main;
        document.getElementById('temp').textContent = jsObject.main.temp + " *F";
        document.getElementById('chill').textContent = jsObject.wind.deg;
        
    
      });
    
      
    fetch("https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=5b80935c4ea5e0ea9c17310ade26c1ed&units=imperial")
    .then((response) => response.json())
    .then((jsObject) => {
    console.table(jsObject);
    
    const weekday = new Array(7);
      weekday[0] = "Sun";
      weekday[1] = "Mon";
      weekday[2] = "Tues";
      weekday[3] = "Wed";
      weekday[4] = "Thur";
      weekday[5] = "Fri";
      weekday[6] = "Sat";
    const fiveDays = document.getElementsByClassName('fiveForecast');
    const json = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
    
    for (var i = 0; i < json.length; i++) {          
      
      const imgsrc = 'https://openweathermap.org/img/w/' + json[i].weather[0].icon + '.png';
          fiveDays[i].childNodes[2].innerHTML= json[i].main.temp + " *F";
          fiveDays[i].childNodes[1].src = imgsrc;
          fiveDays[i].childNodes[0].innerHTML= weekday[new Date(json[i].dt * 1000).getDay()];
    
      console.log(fiveDays);
      console.log(json[i]);
      console.log(imgsrc);
      }  
    });
    
    })
    
    
      
    