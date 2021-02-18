



window.addEventListener('load', (event)=>{
    const lu = document.querySelector ('#lastupdated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();


    const hambutton = document.querySelector('.ham');
    const mainnav  = document.querySelector('#navigation');
    
    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);
})

window.addEventListener('load', (event)=>{
    const lu = document.querySelector ('#lastupdated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();
})


window.addEventListener('load', (event)=>{ 

    
    var myDate = new Date();
    var hrs = myDate.getHours();
    // Get DayOfWeek from int value




    var greet;


    if (hrs < 12)
        greet = 'Good Morning ';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon ';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening ';

        

    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '\n and welcome to The Hottie Weather!';
})


window.addEventListener('load', (event)=> {
    var d = new Date();
    var n = d.getDay();

    if(n == 5)
        greet = 'Friday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.';
    document.getElementById("demo").innerHTML = greet;
})