var React = require('react');
var ReactDOM = require('react-dom');

class UIComponent extends React.component {
  render() {
    return(
      <div>
        <h1>Hi Vinocur</h1>
        <h1>Look at me</h1>
      </div>
    );
  }
}


ReactDOM.render(<UIComponent />, document.getElementById('movieWrapper'));
