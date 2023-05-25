import { useEffect, useState } from 'react';
import { fetchWeather } from '../../services/fetchWeatherApi';
import { defaultWeatherData } from '../../data/defaultData';
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import './WeatherContainer.css';
import weatherImage from '../../assets/images/unknown.png';

const WeatherContainer = () => {
	const [weather, setWeather] = useState(defaultWeatherData);
	const [city, setCity] = useState('Warszawa');

	useEffect(() => {
		const getData = setTimeout(() => {
			fetchWeather(city)
				.then((data) => {
					setWeather(data);
				})
				.catch(() => setWeather({}));
		}, 2000);
		return () => clearTimeout(getData);
	}, [city]);

	const isDataCorrect = JSON.stringify(weather) !== '{}';

	return (
		<div className='container'>
			<img src={weatherImage}  alt="weatherImage"/>
			<input placeholder='Wpisz nazwę miasta' onChange={(e) => setCity(e.target.value)} />
			<WeatherDetails data={weather} isDataCorrect={isDataCorrect} />
		</div>
	);
};

export default WeatherContainer;
