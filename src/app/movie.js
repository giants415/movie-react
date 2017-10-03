import React from 'react';

class Movie extends React.Component {
  render(){
    return(
      <li>
        <img src={this.props.movie.poster} />
        <p>Title: {this.props.movie.title}</p>
        <p>Summary: {this.props.movie.summary}</p>
      </li>
    )
  }
}

export default Movie;
