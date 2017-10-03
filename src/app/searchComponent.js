var React = require('react');

class SearchComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
  }

  render() {
    // let filteredMovies = this.props.movies.filter(
    //   (movie) => {
    //     return movie.title.indexOf(this.state.search) !== -1;
    //   }
    // );

    return(
      <div>
        <input
           type="text"
           value={this.state.search}
           onChange={this.updateSearch.bind(this)} />

        <button>Search</button>
      </div>
    );
  }
}

module.exports = SearchComponent;
