var React = require('react');
var ReactDOM = require('react-dom');
require('./style/final.css');

var SearchComponent = require('./SearchComponent');
var MovieComponent = require('./MovieComponent');

let movies = [
  {
    id: 0,
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51Qvs9i5a%2BL._SL500_AC_SS350_.jpg',
    title: 'Lord Potter and the Monsters',
    summary: 'Destroys a ring or something'
  },
  {
    id: 1,
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Pacific_Rim_FilmPoster.jpeg',
    title: 'Pacific Rim Monsters',
    summary: 'Monsters are here and they must be destroyed'
  },
  {
    id: 2,
    poster: 'https://upload.wikimedia.org/wikipedia/en/6/65/Clerks_movie_poster%3B_Just_because_they_serve_you_---_.jpg',
    title: 'Clerks 1',
    summary: 'guys sell stuff from a store'
  },
  {
    id: 3,
    poster: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Baby_Driver_poster.jpg',
    title: 'Baby Driver',
    summary: 'Drives fast like a car, nascar, nascar'
  }
]

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
