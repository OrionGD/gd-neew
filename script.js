const apiKey = '036939265f38b7943c9d6acc5a5db0b0'; // Your API Key

function getWeather() {
    const city = document.getElementById('locationInput').value.trim();

    if (city === "") {
        alert("Please enter a location.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found.");
            }
            return response.json();
        })
        .then(data => {
            // Extract temperature correctly
            const temperature = data.main.temp.toFixed(1); // Rounds temp to 1 decimal place

            document.getElementById('weatherDisplay').innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherDisplay').innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
}
