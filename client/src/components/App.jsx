import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: [
      {
        title: 'Mean Girls',
        display: 'block'
      },
      {
        title: 'Hackers',
        display: 'block'
      },
      {
        title: 'The Grey',
        display: 'block'
      },
      {
        title: 'Sunshine',
        display: 'block'
      },
      {
        title: 'Ex Machina',
        display: 'block'
      }
    ]};
    this.searchMovie = this.searchMovie.bind(this);
    this.resetList = this.resetList.bind(this);
  }

  searchMovie(movie) {
    const searchFor = movie.toLowerCase();
    const movies = [...this.state.movies];
    let foundMovie = false;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title.toLowerCase().search(searchFor) < 0) {
        movies[i].display = 'none';
      } else {
        foundMovie = true;
      }
    }
    this.setState(movies);
    if (!foundMovie) {
      alert('No movie by that name found');
    }
  }

  resetList() {
    const movies = [...this.state.movies];
    for (let i = 0; i < movies.length; i++) {
      movies[i].display = 'block';
    }
    this.setState(movies);
  }

  render() {
    return (
      <div>
        <div>MovieList</div>
        <SearchBar searchMovie={this.searchMovie} resetList={this.resetList} movies={this.state.movies}/>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;