import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({add: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addMovie(this.state.add);
    this.setState({add: ''})
  }

  render() {
    return (
      <div>
        <form>
        <input type='text' placeholder='Add Movie...' value={this.state.add} onChange={this.handleChange}></input>
        <input type='submit' value='Add!' onClick={this.handleSubmit}></input>
      </form>
      </div>
    );
  }
}

export default AddMovie;