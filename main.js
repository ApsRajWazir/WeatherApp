const submit = document.getElementById('submit')
const city = document.getElementById('city')
const cityName = document.getElementById('cityName')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '06be72e4e2msh02bd14064ae201fp1c56c4jsn902e337712e1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const fetchWeather = async (city) => {
	cityName.innerText = city
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

	try {
		const response = await fetch(url, options); // 1st Response
		const result = await response.json(); // 2nd Response

		// Getting Weather Details from 2nd Response
		document.getElementById('temp').innerText = result.temp
		document.getElementById('feels_like').innerText = result.feels_like
		document.getElementById('humidity').innerText = result.humidity
		document.getElementById('min_temp').innerText = result.min_temp
		document.getElementById('max_temp').innerText = result.max_temp
		document.getElementById('wind_speed').innerText = result.wind_speed
		document.getElementById('wind_degrees').innerText = result.wind_degrees
		document.getElementById('sunrise').innerText = result.sunrise
		document.getElementById('sunset').innerText = result.sunset


		// console.log(result);
		return response.status
	} catch (error) {
		console.error(error);
	}
}

submit.addEventListener('click', (ev)=>{
	ev.preventDefault() // To Prevent Reloading of Page
	fetchWeather(city.value)
})

fetchWeather('Delhi') // Default Weather City