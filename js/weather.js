const API_KEY = "b9e77d4ad6f8d9468ca37db8a8438a99";


function weatherImage(desc){
    switch (desc) {
        case "clear sky":
            return "http://openweathermap.org/img/wn/01d.png";
        case "few clouds":
            return "http://openweathermap.org/img/wn/02d.png";
        case "scattered clouds":
            return "http://openweathermap.org/img/wn/03d.png";
        case "broken clouds":
            return "http://openweathermap.org/img/wn/04d.png";
        case "shower rain":
            return "http://openweathermap.org/img/wn/09d.png";
        case "rain":
            return "http://openweathermap.org/img/wn/10d.png";
        case "thunderstorm":
            return "http://openweathermap.org/img/wn/11d.png";
        case "snow":
            return "http://openweathermap.org/img/wn/13d.png";
        case "mist":
            return "http://openweathermap.org/img/wn/50d.png";
    }
}

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#now__weather img");
            const temperature = document.querySelector("#now__weather span:nth-child(2)");
            const city = document.querySelector("#now__weather span:nth-child(3)");
            weather.setAttribute("src", weatherImage(data.weather[0].description));
            temperature.innerText = `${Math.round(data.main.temp-273.15)}˚C / `;
            city.innerText= `${data.name}`;
            // weather.innerText = data.weather[0].main;
            // console.log(data.main.temp);
    });
}

function onGeoError(){
    alert("Can't find you. No waether for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);