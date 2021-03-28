

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < (towns[2].events).length; i++ ) {

      let card = document.createElement('section');
      card.classList.add('event_today');
      card.innerHTML = `<p><b>${towns[2].events[i]}</b></p>`;

      document.querySelector('#events').appendChild(card);
  }




});