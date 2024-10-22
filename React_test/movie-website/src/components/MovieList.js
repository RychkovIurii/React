import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies, onWatchLater, onMovieClick }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} onWatchLater={onWatchLater} onMovieClick={onMovieClick} />
      ))}
    </div>
  );
};

export default MovieList;
