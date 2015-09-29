var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <a href='/'>Index</a>
        <a href='/about'>About</a>
      </header>
    );
  }
});

module.exports = Header;