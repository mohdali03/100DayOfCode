
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2ff8737fdmsh1c9bc089d33363bp17a97djsn92e81bbf9952',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (City) => {
    Citynaam.innerHTML = City;



    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${City}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

let Submit = document.getElementById("Submit");
let CityName = document.getElementById("CityName")
Submit.addEventListener("click", (e) => {

    e.preventDefault();
    getWeather(CityName.value)

})
getWeather("Mumbai");



