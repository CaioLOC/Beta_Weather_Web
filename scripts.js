const key = "a3417ba604d415ca8f8cc6638349a9fe"

function dataOnScreen(data) {
    console.log(data)
    document.querySelector("h2").innerHTML = "Tempo em " + data.name
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".weather-image").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".climatic-condition").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = `Umidade: ${data.main.humidity}%`
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    dataOnScreen(data)
}

function clickOnButton() {
    const city = document.querySelector(".input-city").value
    searchCity(city)
}