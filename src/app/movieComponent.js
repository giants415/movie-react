var React = require('react');


class MovieComponent extends React.Component {

  render() {
    return(
      <div>
        <img src={this.props.movies.poster} />
        <p>Title: {this.props.movies.title}</p>
        <p>Summary: {this.props.movies.summary}</p>
      </div>
    );
  }
}

module.exports = MovieComponent;
