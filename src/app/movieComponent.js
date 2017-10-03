var React = require('react');

import Movie from './movie';


class MovieComponent extends React.Component {

  render() {
    return(
      <ul>
        {
          this.props.movies.map((movie)=> {
            return <Movie movie={movie} key={movie.id}/>
          })
        }
      </ul>
    );
  }
}

module.exports = MovieComponent;
