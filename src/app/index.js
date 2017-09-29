var React = require('react');
var ReactDOM = require('react-dom');
require('./style/final.css');

var SearchComponent = require('./SearchComponent');
var MovieComponent = require('./MovieComponent');

let movies = {
  poster: 'https://images-na.ssl-images-amazon.com/images/I/51Qvs9i5a%2BL._SL500_AC_SS350_.jpg',
  title: 'Lord Potter and the Monsters',
  summary: 'Destroys a ring or something'
}

class UIComponent extends React.Component {

  render() {
    return(
      <div className={"ui"}>
        <h1>Look Up a Movie</h1>
        <SearchComponent className={"search"} />
        <MovieComponent className={"movie"} movies={this.props.movies} />
      </div>
    );
  }
  
}

ReactDOM.render(<UIComponent movies={movies}/>, document.getElementById('movieWrapper'));
