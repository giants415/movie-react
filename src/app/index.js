var React = require('react');
var ReactDOM = require('react-dom');

var SearchComponent = require('./SearchComponent');

class UIComponent extends React.Component {
  render() {
    return(
      <div>
        <h1>Look Up a Movie</h1>
        <SearchComponent></SearchComponent>
      </div>
    );
  }
}


ReactDOM.render(<UIComponent />, document.getElementById('movieWrapper'));
