import React from 'react';

const MovieList = (props) => (
  <div>
    {props.movies.map((movie, idx) => (
      <div style={{display: movie.display}} key={idx}>{movie.title}</div>
    ))}
  </div>
);

export default MovieList;