var React = require('react');
var ReactDOM = require('react-dom');
require('./style/final.css');

var SearchComponent = require('./SearchComponent');
var MovieComponent = require('./MovieComponent');

class UIComponent extends React.Component {
  render() {
    return(
      <div>
        <h1>Look Up a Movie</h1>
        <SearchComponent></SearchComponent>
        <MovieComponent></MovieComponent>
      </div>
    );
  }
}


ReactDOM.render(<UIComponent />, document.getElementById('movieWrapper'));
