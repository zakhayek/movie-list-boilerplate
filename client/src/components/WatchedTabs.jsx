import React from 'react';

class WatchedTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({watched: event.target.value});
    this.props.watchedTabState(event.target.value);
  }

  render() {
    return (
      <div><button value={true} onClick={this.handleClick}>Watched</button><button value={false} onClick={this.handleClick}>Unwatched</button></div>
    );
  }
}

export default WatchedTabs;