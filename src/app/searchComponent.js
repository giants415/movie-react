var React = require('react');

class SearchComponent extends React.Component {
  render() {
    return(
      <div>
        <input type="text" /><button>Search</button>
      </div>
    );
  }
}

module.exports = SearchComponent;
