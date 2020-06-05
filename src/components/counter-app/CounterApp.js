import React, { Component } from 'react';
import CounterButton from './CounterButton';
 
class CounterApp extends Component {
  constructor(){
    super();
    this.state={totalCount: 0
    }

    //binding this to functions
    this.handleReset = this.handleReset.bind(this);
    this.handleAddSubtract = this.handleAddSubtract.bind(this);
  }

  render() {
    return (
      <div className="container">
        <CounterButton handleAddSubtract={this.handleAddSubtract}></CounterButton> {/*Increment the value of counter by 1. The value of by is obtained in CounterButton class using this.props.by*/}
        <CounterButton by = {5} handleAddSubtract={this.handleAddSubtract}></CounterButton> {/*Increment the value of counter by 5*/}
        <CounterButton by = {10} handleAddSubtract={this.handleAddSubtract}></CounterButton> {/*Increment the value of counter by 10*/}
        <CounterButton by = {-1} handleAddSubtract={this.handleAddSubtract}></CounterButton> {/*Decrement the value of counter by 1. The value of by is obtained in CounterButton class using this.props.by*/}
        <CounterButton by = {-5} handleAddSubtract={this.handleAddSubtract}></CounterButton> {/*Decrement the value of counter by 5*/}
        <CounterButton by = {-10} handleAddSubtract={this.handleAddSubtract}></CounterButton> {/*Decrement the value of counter by 10*/}
        <h5>Total Sum:{this.state.totalCount}</h5>
        <button className="btn btn-warning" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }

  handleReset(){
    // console.log("Reset Called");
    this.setState({
      totalCount: 0,
    })
  }

  //The value of by is passed from its child class i.e. CounterButton. For that we will have to pass this function as props to the class CounterButton
  handleAddSubtract(by){
    // console.log(`handleAddSubtract called from CounterApp and incremented by ${by}`);
    // console.log(`Total Count is ${this.state.totalCount}`);
    this.setState({
      totalCount: this.state.totalCount + by,
    })
  }
}
export default CounterApp;