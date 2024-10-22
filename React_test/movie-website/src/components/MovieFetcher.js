import React, { useState, useEffect } from 'react';

const MovieFetcher = ({ category }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchMovies = async () => {
		try {
			const response = await fetch(`https://sampleapis.com/movies/api/${category}`);
			const data = await response.json();
			setMovies(data.slice(0, 5));
		} catch (error) {
			console.error('Error fetching movies:', error);
		}
		};

		fetchMovies();
	}, [category]);

	return (
		<div className="movie-fetcher">
		{movies.length > 0 ? (
			movies.map(movie => (
			<div key={movie.id} className="movie-card">
				<img src={movie.poster} alt={movie.title} />
				<h3>{movie.title}</h3>
				<p>{movie.plot}</p>
			</div>
			))
		) : (
			<p>Loading movies...</p>
		)}
		</div>
	);
};

export default MovieFetcher;
