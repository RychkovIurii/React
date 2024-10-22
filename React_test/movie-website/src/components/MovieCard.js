import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onWatchLater, onMovieClick }) => {
  const { Title, Poster, Year, Plot } = movie;
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = (e) => {
    e.stopPropagation();
    setLikes(likes + 1);
  };

  const handleDislike = (e) => {
    e.stopPropagation();
    setDislikes(dislikes + 1);
  };

  return (
    <div className="movie-card" onClick={() => onMovieClick(movie)}>
      <img src={Poster} alt={Title} />
      <h3>{Title} ({Year})</h3>
      <p>{Plot}</p>
      <div className="buttons">
        <button className="like-button" onClick={handleLike}>Like ({likes})</button>
        <button className="dislike-button" onClick={handleDislike}>Dislike ({dislikes})</button>
        <button className="watch-later-button" onClick={(e) => { e.stopPropagation(); onWatchLater(movie); }}>Watch Later</button>
      </div>
    </div>
  );
};

export default MovieCard;
