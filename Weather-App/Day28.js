const weatherApi = {
    key: "828cc99e0335c9476a8f751b7c386d9a",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

window.addEventListener('load', () => {
    if (!navigator.geolocation) {
        return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const url = `${weatherApi.baseUrl}?lat=${latitude}&lon=${longitude}&appid=${weatherApi.key}&units=metric`;

        fetch(url)
            .then((response) => response.json())
            .then(showWeatherReport)
            .catch((error) => console.error("Unable to load local weather:", error));
    });
});


const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {

        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);

    }
});

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}

function showWeatherReport(weather) {
    console.log(weather);

    document.querySelector('.weather-body').style.display = "block";

    let city = document.getElementById('city');
    city.innerText = `${weather.name},${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let WeatherType = document.getElementById('weather');
    WeatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    //console.log(todayDate);
    date.innerText = dateManage(todayDate);

    if (WeatherType.textContent === 'Clear') {
        document.body.style.backgroundImage = "url('clear1.jpg')"
    }
    else if (WeatherType.textContent === 'Clouds') {
        document.body.style.backgroundImage = "url('clouds.jpg')"
    }
    else if (WeatherType.textContent === 'Haze') {
        document.body.style.backgroundImage = "url('clouds.jpg')"
    }
    else if (WeatherType.textContent === 'Rain') {
        document.body.style.backgroundImage = "url('rain.jpg')"
    }
    else if (WeatherType.textContent === 'Snow') {
        document.body.style.backgroundImage = "url('snow.jpg')"
    }
    else if (WeatherType.textContent === 'Thunderstorm') {
        document.body.style.backgroundImage = "url('thunder.jpg')"
    }
    else if (WeatherType.textContent === 'Sunny') {
        document.body.style.backgroundImage = "url('sunny.jpg')"
    }
}

function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;


}











