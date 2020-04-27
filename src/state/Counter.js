import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    console.log('props in constructor', props);
    super(props)
    this.state = {
      count: props.count || 0,
      step: props.step || 1
    }
  } 
  handleButtonClick = () =>{
    console.log('props in handeButtonClick', this.props)
    console.log('state in handleButtonClick', this.state.count)
    this.setState({
      count: this.state.count + this.state.step
    })
  }

  render(){
    
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button
          onClick={this.handleButtonClick}
        >
          Add 1
        </button>
      </div>
    )
  }
}