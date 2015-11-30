var React = require('react');
var ReactDOM = require('react-dom');

var Login = React.createClass({

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
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
    );
  },

  _onChange: function() {
    
  }

});

module.exports = Login;