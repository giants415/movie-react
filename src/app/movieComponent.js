var React = require('react');

class MovieComponent extends React.Component {
  constructor(props){
    super(props);

    this.movie = {
      poster: 'https://images-na.ssl-images-amazon.com/images/I/51Qvs9i5a%2BL._SL500_AC_SS350_.jpg',
      title: 'Lord Potter and the Monsters',
      summary: 'Destroys a ring or something'
    }
  }


  render() {
    return(
      <div>
        <img src={this.movie.poster} />
        {this.movie.title}
        {this.movie.summary}
      </div>
    );
  }
}

module.exports = MovieComponent;
