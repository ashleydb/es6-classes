// Comparing ComponentOne, built using React.createClass vs. ComponentTwo, built using extends React.Component
import React from 'react';

class ComponentTwo extends React.Component {
  // Need to override the constructor to set the initial state
  constructor(props) {
    // Call the parent constructor with the props object we automatically get
    super(props);
    // Now set the state here, based on the props
    this.state = {
      count: props.count
    };
    // BINDING: Can call this here to keep 'this' scoped to this object in onClick
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    // BINDING: Note we won't have 'this' bound to anything by default... We lose autobinding for any callbacks
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <h3>ComponentTwo using extends React.Component</h3>
        <p>Current Count: {this.state.count}</p>
        {/*BINDING: Could call  onClick={this.onClick.bind(this)} here instead of in the constructor*/}
        {/*BINDING: Or a avoid binding, put the logic as onClick={() => {this.setState(blah)}}*/}
        <button className="button" onClick={this.onClick}>Button Two</button>
      </div>
    );
  }
}

// After the object is created we can manipulate it, so we use that to set the default props and prop types
ComponentTwo.propTypes = {
  count: React.PropTypes.number
}
ComponentTwo.defaultProps = {
  count: 50
}

export default ComponentTwo;
