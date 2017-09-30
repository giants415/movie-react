var React = require('react');

class SearchComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      search: 'Enter a Movie Title'
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
  }



  render() {
    return(
      <div>
        <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} /><button>Search</button>
      </div>
    );
  }
}

module.exports = SearchComponent;
