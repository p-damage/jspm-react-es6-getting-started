import React from 'react';

class HelloReactWorld extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello {this.props.name} World </h1>
      </div>
    )
  }
}

React.render(<HelloReactWorld name="React"/>, document.getElementById('main'));
