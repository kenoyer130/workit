var React = require('react');
var ReactDOM = require('react-dom');

var Login = require('./login.jsx');

var WorkItApp = React.createClass({

  getInitialState: function() {
    return null;
  },

  componentDidMount: function() {
    
  },

  componentWillUnmount: function() {
    
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
        <Login />
    );
  },

  _onChange: function() {
    
  }

});

module.exports = WorkItApp;