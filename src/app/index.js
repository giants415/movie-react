var React = require('react');
var ReactDOM = require('react-dom');
require('./style/final.css');

var SearchComponent = require('./SearchComponent');
var MovieComponent = require('./MovieComponent');

class UIComponent extends React.Component {

  render() {
    return(
      <div className={"ui"}>
        <h1>Look Up a Movie</h1>
        <SearchComponent className={"search"} />
        <MovieComponent className={"movie"} />
      </div>
    );
  }
}

ReactDOM.render(<UIComponent />, document.getElementById('movieWrapper'));
