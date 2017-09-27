var React = require('react');

var PosterComponent = require('./PosterComponent');
var TitleComponent = require('./TitleComponent');
var SummaryComponent = require('./SummaryComponent');


class MovieComponent extends React.Component {
  render() {
    return(
      <div>
        <PosterComponent></PosterComponent>
        <TitleComponent></TitleComponent>
        <SummaryComponent></SummaryComponent>
      </div>
    );
  }
}

module.exports = MovieComponent;
