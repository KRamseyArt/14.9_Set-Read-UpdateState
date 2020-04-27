import React from 'react';

export default class TheDate extends React.Component{
  constructor(props){
    super(props)
    this.state = { datetime: new Date() };
    console.log('constructor')
  }
  componentDidMount(){
    this.interval = setInterval(() =>{
      console.log('componentDidMount')
      this.setState({
        datetime: new Date()
      })
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render() {
    console.log('render')
    return (
      <div className="theDate">
        {this.state.datetime.toLocaleString()}
      </div>
    )
  }
}