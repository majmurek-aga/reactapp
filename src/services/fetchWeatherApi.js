const API_KEY = '&appid=7a2ea2da378bcbb457659677153c5621';
// const API_KEY = '&appid=8449fe27dae11dfb946bb82ad071ba5d';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_METRIC = '&units=metric';

export const fetchWeather = async (city) => {
	if (!city) {
		alert('Wpisz miasto');
		return;
	}

	const URL = `${API_URL}${city}${API_KEY}${API_METRIC}&lang=pl`;
	// try {
	// 	const response = await fetch(URL);
	// 	return await response.json();
	// } catch (error) {
	// 	alert('Serwer pogodowy przestał działać');
	// 	console.error(error);
	// }
	return fetch(URL).then((response) => {
		if (!response.ok) throw new Error(response.status);
		else return response.json();
	});
};
