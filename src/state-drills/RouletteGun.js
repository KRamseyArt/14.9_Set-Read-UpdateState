import React from 'react';

export default class RouletteGun extends React.Component {
  constructor(prop){
    super(prop)
    this.state = {
      chamber: prop.bulletInChamber || null,
      spinningTheChamber: false,
    }
  }

  runTriggerPull = () => {
    if(this.state.spinningTheChamber){
      return "spinning the chamber and pulling the trigger!..."
    } else {
      const randomChamber = Math.floor((Math.random() * 7) + 1);
      console.log(this.state.chamber + " - " + randomChamber)

      if (this.state.chamber === randomChamber){
        return "BANG!"
      } else {
        return "you're safe!"
      }
    }
  }

  pullTheTrigger = () => {
    this.setState({
      spinningTheChamber: true
    })

    this.timeout = setTimeout(() => {
      this.setState({
        // chamber: Math.floor((Math.random() * 7) + 1),
        spinningTheChamber: false
      })
    }, 2000)
  }

  componentWillUnmount(){
    clearTimeout(this.timeout)
  }

  
  render(){
    return (
      <div>
        <p>
          {this.runTriggerPull()}
        </p>
        <button
          onClick={this.pullTheTrigger}
        >
          Pull the trigger!
        </button>
      </div>
    )
  }
}