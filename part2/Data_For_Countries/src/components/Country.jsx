import React from 'react';

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Official name: {country.name.official}</p>
      <p>Native name: {country.name.nativeName.ara.common}</p>
      <p>Currencies: {Object.values(country.currencies).map(currency => currency.name).join(', ')}</p>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <h3>Border countries</h3>
      <ul>
        {country.borders.map(border => (
          <li key={border}>{border}</li>
        ))}
      </ul>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
    </div>
  );
};

export default Country;
