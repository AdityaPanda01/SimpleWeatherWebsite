const apikey = "ae215c59eda45fc7ab5b2f9948a12764"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?appid=ae215c59eda45fc7ab5b2f9948a12764&units=metric&q="
const searchcity = document.querySelector(".search input")
const searchbutton = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
async function weather(city) {
    const val = await fetch(apiurl + city)
    let data = await val.json()
    console.log(data)
    let cityName = document.getElementById("city")
    let place = data.name
    cityName.innerHTML = place
    let tempValue = document.getElementById("temp")
    let temperature = data.main.temp
    tempValue.innerHTML = (`${temperature}°c`)
    let humidValue = document.getElementById("humidity")
    humidValue.innerHTML = (data.main.humidity + "%")
    let windspeedValue = document.getElementById("windspeed")
    let speed = data.wind.speed
    windspeedValue.innerHTML = (`${speed}km/h`)
 console.log(data.weather[0].main)
 if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png"
}

else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png"
}

else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png"
}

else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png"
}

else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png"
}


else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png"
}




}
//weather(city)
searchbutton.addEventListener("click", () => {
    weather(searchcity.value)
})