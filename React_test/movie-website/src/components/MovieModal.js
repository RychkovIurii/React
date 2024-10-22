import React from 'react';
import './MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
	if (!movie) return null;

	return (
	<div className="modal-overlay" onClick={onClose}>
		<div className="modal-content" onClick={(e) => e.stopPropagation()}>
		<h2>{movie.Title}</h2>
		<img src={movie.Poster} alt={movie.Title} />
		<p>{movie.Plot}</p>
		<p>Awards: {movie.Awards}</p>
		<p>Duration: {movie.Runtime}</p>
		<p>Genre: {movie.Genre}</p>
		<p>Actors: {movie.Actors}</p>
		<button onClick={onClose}>Close</button>
		</div>
	</div>
	);
};

export default MovieModal;
