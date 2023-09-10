import { Route, Routes } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
// import { lazy } from 'react';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="muvies/:movieId" element={<MovieDetails />} />
        {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
      </Routes>
    </Container>
  );
};

// Ключ API: b6b380588e5139b487c2dc5a3fb429cc
