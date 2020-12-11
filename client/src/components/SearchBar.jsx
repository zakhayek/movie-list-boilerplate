import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({search: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchMovie(this.state.search);
    document.getElementById('reset').style.display = 'inline';
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({search: ''})
    this.props.resetList();
    document.getElementById('reset').style.display = 'none';
  }

  render(){
    return (
      <form>
        <input type='text' placeholder='Search...' value={this.state.search} onChange={this.handleChange}></input>
        <input type='submit' value='Go!' onClick={this.handleSubmit}></input>
        <button id='reset' style={{display: 'none'}}onClick={this.handleReset}>Reset</button>
      </form>
    );
  }

}

export default SearchBar;