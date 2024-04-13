import React, { useState, useEffect } from 'react';
import './FooterStyles.css';

const Weather = () => {
	const [weatherData, setWeatherData] = useState([]);

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const responseAlmaty = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Almaty&appid=875671f7e956f5f3866e2f09022f2a8b&units=metric');
				const dataAlmaty = await responseAlmaty.json();
				
				const responseTashkent = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=875671f7e956f5f3866e2f09022f2a8b&units=metric');
				const dataTashkent = await responseTashkent.json();
				
				const responseBishkek = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=875671f7e956f5f3866e2f09022f2a8b&units=metric');
				const dataBishkek = await responseBishkek.json();

				setWeatherData([
					{ city: 'Almaty', temperature: dataAlmaty.main.temp },
					{ city: 'Tashkent', temperature: dataTashkent.main.temp },
					{ city: 'Bishkek', temperature: dataBishkek.main.temp }
				]);
			} catch (error) {
				console.error('Error loading weather data:', error);
			}
		};

		fetchWeatherData();
	}, []);

	return (
		<div className='weather'>
			<h4>Weather in cities:</h4>
			<ul>
				{weatherData.map((cityData, index) => (
					<li key={index}>
						{cityData.city}: {cityData.temperature}°C
					</li>
				))}
			</ul>
		</div>
	);
};

export default Weather;