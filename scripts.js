const key = "a3417ba604d415ca8f8cc6638349a9fe"

function dataOnScreen(data) {
    console.log(data)
    document.querySelector("h2").innerHTML = "Tempo em " + data.name
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".weather-image").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".climatic-condition").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = `Umidade: ${data.main.humidity}%`
    document.querySelector(".max-temperature").innerHTML = `Temperatura máxima: ${Math.floor(data.main.temp_max)}°C`
    document.querySelector(".min-temperature").innerHTML = `Temperatura mínima: ${Math.floor(data.main.temp_min)}°C`
    document.querySelector(".feels-like").innerHTML = `Sensação térmica: ${Math.floor(data.main.feels_like)}°C`
    document.querySelector(".pressure").innerHTML = `Pressão: ${data.main.pressure} mb`
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    dataOnScreen(data)
}

function clickOnButton() {
    const city = document.querySelector(".input-city").value
    searchCity(city)
}

// function moreInfo() {
//     const moreInfo = document.getElementById('more-info')
//     moreInfo.classList.add('open')

//     moreInfo.addEventListener('click', (e) => {
//         if(e.target.id == 'close-more-info-button') {
//             moreInfo.classList.remove('open')
//         }
//     })
// }

function moreInfo() {
    const openMoreInfoButton = document.querySelector('.open-more-info-button');
    const moreInfo = document.querySelector('.more-info');


    if (openMoreInfoButton.innerText === 'Mostrar mais') {
        openMoreInfoButton.innerText = 'Mostrar menos';
        moreInfo.classList.remove('hidden')
    } else {
        openMoreInfoButton.innerText = 'Mostrar mais';
        moreInfo.classList.add('hidden')
    }
}
