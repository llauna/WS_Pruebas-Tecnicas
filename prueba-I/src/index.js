let form = document.getElementById("form-container");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let city = document.getElementById("city").value;
    let variableFija = city;

    getWeatherData(variableFija).then((response) => {
        const weather = document.createElement("p");
        document.body.appendChild(weather);
        const section = document.getElementById("temp-section");

        const minTemp = document.getElementById("min-temp");

    });

});

function getWeatherData(variableFija) {
    if (!variableFija || typeof variableFija !== 'string') {
        throw new Error('La variable fija debe ser una cadena no vacía')
    }
    const q = encodeURIComponent(variableFija);
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + q + '&appid=d12ba961542eba697de15e60dce3296b';
    return fetch(url)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        const elemento_1 = document.getElementById('miElemento_1');
        elemento_1.innerHTML = `&`;
        elemento_1.innerHTML = `La temperatura de hoy es: ${Math.trunc(data.main.temp - 273.15) }°C`;
        const elemento_2 = document.getElementById('miElemento_2');
        elemento_2.innerHTML = `&`;
        elemento_2.innerHTML = `La temperatura minima de hoy es: ${Math.trunc(data.main.temp_min - 273.15) }°C`;
        console.log(data);

    });
}