import React from 'react';

const MovieList = (props) => (
  <div>
    {props.movies.map((movie, idx) => (
      <div className='movie' style={{display: movie.display}} key={idx}>
        {movie.title}
        <button>Watched</button>
        </div>
    ))}
  </div>
);

export default MovieList;