// Comparing ComponentOne, built using React.createClass vs. ComponentTwo, built using extends React.Component
import React from 'react';

var ComponentOne = React.createClass({
  // Setting up type validation for the props
  propTypes: {
    count: React.PropTypes.number
  },
  // Values for props if they aren't passed into the component
  getDefaultProps: function() {
    return {
      count: 11
    };
  },
  // Setting the initial state, based on the props
  getInitialState: function() {
    return {
      count: this.props.count
    };
  },
  onClick: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  render: function() {
    return (
      <div>
        <h3>ComponentOne using React.createClass()</h3>
        <p>Current Count: {this.state.count}</p>
        <button className="button" onClick={this.onClick}>Button One</button>
      </div>
    );
  }
});

export default ComponentOne;
