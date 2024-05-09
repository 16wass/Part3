// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';
import SearchBox from './components/SearchBox';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Country Information</h1>
      <SearchBox searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default App;
