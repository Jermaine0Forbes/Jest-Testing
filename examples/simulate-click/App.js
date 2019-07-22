import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export const Counter = (props) =>{
  return (
    <div className="mb-3">
      <h3> Increment Button </h3>
      <button id="count-btn" className=" btn btn-success" onClick={props.click}>increment
        <span id="counter" className="ml-1badge badge-light">{props.count}</span>
      </button>
    </div>
  )
}



class App extends Component {

    constructor(props){
      super(props)
      this.state = {count:0}
      this.num = 0;
      this.updateClick = this.updateClick.bind(this);
    }

      updateClick (){
        this.setState({count:++this.num})
      }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="header">Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter count={this.state.count} click={this.updateClick}/>
      </div>
    );
  }
}

export default App;
