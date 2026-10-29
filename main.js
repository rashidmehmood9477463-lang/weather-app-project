const weatherData = {
    lahore: {
        name: "Lahore",
        temperature: 28,
        feelsLike: 30,
        description: "Partly Cloudy",
        icon: "⛅",
        humidity: 65,
        wind: 12
    },

    karachi: {
        name: "Karachi",
        temperature: 32,
        feelsLike: 35,
        description: "Sunny",
        icon: "☀️",
        humidity: 70,
        wind: 16
    },

    islamabad: {
        name: "Islamabad",
        temperature: 24,
        feelsLike: 25,
        description: "Cloudy",
        icon: "☁️",
        humidity: 60,
        wind: 10
    },

    multan: {
        name: "Multan",
        temperature: 34,
        feelsLike: 37,
        description: "Hot and Sunny",
        icon: "🌤️",
        humidity: 45,
        wind: 14
    },

    peshawar: {
        name: "Peshawar",
        temperature: 27,
        feelsLike: 29,
        description: "Clear Sky",
        icon: "☀️",
        humidity: 55,
        wind: 9
    }
};

const searchForm = document.getElementById("searchForm");
const cityInput = document.getElementById("cityInput");
const message = document.getElementById("message");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const city = cityInput.value.trim().toLowerCase();

    if (city === "") {
        message.textContent = "Please enter a city name.";
        return;
    }

    const weather = weatherData[city];

    if (!weather) {
        message.textContent =
            "Demo data is not available for this city.";
        return;
    }

    document.getElementById("cityName").textContent =
        weather.name;

    document.getElementById("temperature").textContent =
        weather.temperature;

    document.getElementById("feelsLike").textContent =
        weather.feelsLike;

    document.getElementById("description").textContent =
        weather.description;

    document.getElementById("weatherIcon").textContent =
        weather.icon;

    document.getElementById("humidity").textContent =
        weather.humidity + "%";

    document.getElementById("wind").textContent =
        weather.wind + " km/h";

    message.textContent = "Demo weather loaded successfully.";
});