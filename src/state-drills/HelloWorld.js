import React from 'react';

export default class HelloWorld extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      who: props.who || 'world!'
    }
  }

  handleButtonClick = (who) => {
    this.setState({
      who
    })
  }

  render(){
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button
          onClick={() => this.handleButtonClick("world!")}
        >
          World
        </button>
        <button
          onClick={() => this.handleButtonClick("friend!")}
        >
          Friend
        </button>
        <button
          onClick={() => this.handleButtonClick("react!")}
        >
          React
        </button>
      </div>
    )
  }
}