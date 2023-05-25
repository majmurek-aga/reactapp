import './WeatherDetails.css';
const WeatherDetails = ({ data, isDataCorrect }) => {
	return (
		<div>
			{isDataCorrect ? (
				<>
					<h2>
						Dane dla <span className='value'>{data?.name}</span>
					</h2>
					<p>
						Temperatura: <span className='value'>{data?.main?.temp}</span>
					</p>
					<p>
						Wilgotność powietrza: <span className='value'>{data?.main?.humidity}</span>
					</p>
					<p>
						Ciśnienie: <span className='value'>{data?.maino?.pressure}</span>
					</p>
					<p>
						Pogoda ogólnie:<span className='value'>{data?.weather[0]?.description}</span>
					</p>
				</>
			) : (
				<span className='value'>Wpisane miasto nie istnieje</span>
			)}

		</div>
	);
};

export default WeatherDetails;
