import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



export class TextInpt extends Component {

  constructor(props){
    super(props)
    this.state = {value:""};
    this.getSubmit = this.getSubmit.bind(this);
    this.getName = this.getName.bind(this);
  }

  getName(e){
    this.setState({value:e.target.value})
  }

  getSubmit(e){
   let p = document.querySelector("p.App-intro");
   p.innerHTML = this.state.value;
   e.preventDefault();
  }

  render(){
    return(
      <div className="mb-3">
          <h3> Form Submission </h3>
        <form onSubmit={this.getSubmit}>
          <div className="form-group">
            <input type="text" name="username" onChange={this.getName} />
          </div>
          <input className="btn btn-primary" type="submit" value="submit"/>
        </form>
      </div>
    )
  }
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
        <TextInpt />
      </div>
    );
  }
}

export default App;
