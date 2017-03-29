// Comparing ComponentOne, built using React.createClass vs. ComponentTwo, built using extends React.Component
import React from 'react';

// This would have come from somewhere, like a DB. Will use this in our higher order compnent below
var isAdmin = true;

// Higher order component. The function takes a component and returns a (modified) component.
// Note we pass the props down using spread operator.
// In this case we are hiding components from users if they are not an admin, meaning that logic can be encapsulated here
//  rather than modifying every component that needs admin capabilities.
/*
var adminComponent = (Component) => {
  return class Admin extends React.Component {
    render() {
      if (isAdmin) {
        return (
          <div className="callout secondary">
            <p className="alert label">Private Admin Info</p>
            <Component {...this.props} />
          </div>
        );
      } else {
        // The entire higher order component and everything it wraps is hidden from the user since they are not an admin
        return null;
      }
    }
  };
}
*/
// Alternative implementation, extending the component itself so we can override other lifecycle methods
var adminComponent = (Component) => {
  return class Admin extends Component {
    componentDidUpdate() {
      console.log('admin component did update');
      // Call the parent's function, if it was defined in the parent class
      if (super.componentDidUpdate) {
        super.componentDidUpdate();
      }
    }
    render() {
      if (isAdmin) {
        return (
          <div className="callout secondary">
            <p className="alert label">Private Admin Info</p>
            {super.render()}
          </div>
        );
      } else {
        // The entire higher order component and everything it wraps is hidden from the user since they are not an admin
        return null;
      }
    }
  };
}

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
  componentDidUpdate() {
    console.log('component 2 did update');
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

// Using a higher order component
export default adminComponent(ComponentTwo);
