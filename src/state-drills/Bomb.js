import React from 'react';

export default class Bomb extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      timer: 8,
      fuse: "tick"
    }
  }

  componentDidMount(){
    this.interval = setInterval(() =>{
      if (this.state.count < this.state.timer){
        this.setState({
          count: this.state.count + 1
        })
      }

      if (this.state.count >= this.state.timer){
        this.setState({
          fuse: "BOOM!"
        })
      } else if (this.state.count % 2 === 0){
        this.setState({
          fuse: "tick"
        })
      } else if (this.state.count % 2 !== 0){
        this.setState({
          fuse: "tock"
        })
      }
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }
  
  render(){
    return (
      <div>
        <p>
          {this.state.fuse}
        </p>
      </div>
    )
  }
}