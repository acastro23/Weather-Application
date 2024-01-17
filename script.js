document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'API KEY GOES HERE';
    const city = 'Atlanta'; // city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('city').textContent = data.name;
        document.getElementById('temperature').textContent = `${data.main.temp} °C`;
        document.getElementById('details').textContent = `Humidity: ${data.main.humidity}% | Wind Speed: ${data.wind.speed} m/s`;
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        document.getElementById('city').textContent = 'Weather data not available';
    });
});
