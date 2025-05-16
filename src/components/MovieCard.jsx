// src/components/MovieCard.jsx

import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { title, director, genre, releaseYear, synopsis, posterUrl } = movie;

  return (
    <div className="movie-card">
      <img
        src={posterUrl}
        alt={title ? `${title} Poster` : 'Movie Poster'}
        className="movie-poster"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/150x225?text=No+Image';
        }}
      />
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p><strong>Director:</strong> {director}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Release Year:</strong> {releaseYear}</p>
        <p className="movie-synopsis">{synopsis}</p>
      </div>
    </div>
  );
};

export default MovieCard;
