import React from "react";

// state less compoenet or function component
/*function HelloThere(props) {
  return <h1>Hello {props.name}!</h1>;
}*/

// class component
class HelloThere extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default HelloThere;
