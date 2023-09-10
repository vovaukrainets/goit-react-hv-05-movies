import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const API_KEY = 'b6b380588e5139b487c2dc5a3fb429cc';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function trendingMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    trendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li>
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
