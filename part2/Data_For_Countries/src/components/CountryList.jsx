import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country';

const CountryList = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const fetchWeather = async (capital) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Assuming you set the environment variable as mentioned
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };
  

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await fetchWeather(selectedCountry.capital[0]);
      setWeatherData(data);
    };

    if (selectedCountry) {
      fetchWeatherData();
    }
  }, [selectedCountry]);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };


  return (
    <div>
      {countries.map(country => (
        <div key={country.name.common}>
          <h2>{country.name.common}</h2>
          <button onClick={() => handleCountryClick(country)}>
            {selectedCountry === country ? 'Hide' : 'Show'}
          </button>
          {selectedCountry === country && <Country country={country} weather={weatherData} />}
        </div>
      ))}
    </div>
  );
};

export default CountryList;
