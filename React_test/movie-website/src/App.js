import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import MovieList from './components/MovieList';
import CategorySelector from './components/CategorySelector';
import MovieModal from './components/MovieModal';
import './App.css';

/* const staticMovies = [
  { id: 1, title: "The Shawshank Redemption", movieContent: "Two imprisoned men bond over a number of years.", photo: "/images/image1.jpg", altText: "The Shawshank Redemption" },
  { id: 2, title: "The Godfather", movieContent: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", photo: "/images/image2.jpg", altText: "The Godfather" },
  { id: 3, title: "The Dark Knight", movieContent: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.", photo: "/images/image3.jpg", altText: "The Dark Knight" },
  { id: 4, title: "The Godfather Part II", movieContent: "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate.", photo: "/images/image4.jpg", altText: "The Godfather Part II" },
  { id: 5, title: "12 Angry Men", movieContent: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.", photo: "/images/image5.jpg", altText: "12 Angry Men" },
];s
 */
const categories = ['action', 'comedy', 'drama', 'horror', 'romance', 'sci-fi'];

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [selectedCategory, setSelectedCategory] = useState(categories[0]);
	const [watchLaterList, setWatchLaterList] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);

	const getMovieRequest = async (searchValue, category) => {
		const searchTerm = searchValue || category;
		let url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=7918e33e`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			const detailedMovies = await Promise.all(
			responseJson.Search.map(async (movie) => {
			const movieDetailsResponse = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=7918e33e`);
			return await movieDetailsResponse.json();
			})
		);
		setMovies(detailedMovies);
		}
	};

	useEffect(() => {
		getMovieRequest('', selectedCategory);
	}, [selectedCategory]);

	useEffect(() => {
		if (searchValue) {
			getMovieRequest(searchValue, selectedCategory);
		}
	}, [searchValue, selectedCategory]);

	const addToWatchLater = (movie) => {
		setWatchLaterList([...watchLaterList, movie]);
	};

	const handleMovieClick = (movie) => {
		setSelectedMovie(movie);
	};

	const closeMovieModal = () => {
		setSelectedMovie(null);
	};

	return (
		<div className="App">
			<Header setSearchValue={setSearchValue} />
			<div className="main-content">
				<Navigation />
				<div className="content-area">
					<CategorySelector categories={categories} onSelectCategory={setSelectedCategory} />
					<MovieList movies={movies} onWatchLater={addToWatchLater} onMovieClick={handleMovieClick} />
					<div className="watch-later-list">
						<h2>Watch Later List</h2>
						{watchLaterList.map(movie => (
						<div key={movie.imdbID} className="movie-card">
							<img src={movie.Poster} alt={movie.Title} />
							<h3>{movie.Title}</h3>
						</div>
						))}
					</div>
				</div>
			</div>
			{selectedMovie && <MovieModal movie={selectedMovie} onClose={closeMovieModal} />}
			<Footer />
		</div>
	);
};

export default App;
