import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const MovieDetails = () => {
  const API_KEY = 'b6b380588e5139b487c2dc5a3fb429cc';
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setMovieDetails(data))
      .catch(error => console.error('Ошибка при получении данных:', error));
  }, [movieId]);

  return (
    <div>
      <p>{movieDetails.title}</p>
      <p>{movieDetails.overview}</p>
      <p>{movieDetails.vote_average}</p>
      <p>{movieDetails.release_date}</p>
      <Link key={movieId} to={`/:movieId/${movieId}`}></Link>
    </div>
  );
};
export default MovieDetails;
