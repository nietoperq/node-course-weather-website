const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const weatherIcon = document.querySelector('#weatherIcon');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    weatherIcon.src = '';

    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
                messageTwo.textContent = '';
                weatherIcon.src = '';
            } else {
                weatherIcon.src = data.forecast.weather_icon;
                console.log(data.forecast.weather_icon);
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast.description + 
                '. It is currently ' + data.forecast.temperature + ' degrees out. Humidity: ' + data.forecast.humidity + '% Wind speed: ' + data.forecast.wind_speed + ' km/h';
            }
        });
    });
});