import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const API_KEY = 'b6b380588e5139b487c2dc5a3fb429cc';
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
      );

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results);
      } else {
        console.error('Request error');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(movie => (
          <li>
            <Link key={movie.id}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Movies;
