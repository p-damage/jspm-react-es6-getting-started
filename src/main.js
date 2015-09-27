import React from 'react';

class HelloReactWorld extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello {this.props.name} </h1>
      </div>
    )
  }
}

React.render(<HelloReactWorld name="World"/>, document.getElementById('main'));
