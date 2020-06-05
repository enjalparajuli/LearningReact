import React, {Component} from 'react';
import './CounterButton.css';
import PropTypes from 'prop-types';

class CounterButton extends Component {

    constructor(props){
        super(props);
        this.state = {counter: 0}; // default counter value is 0
        
        //binding the functions
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.buttonSignForDisplay = this.buttonSignForDisplay.bind(this);
    }
    
    render() { 
        const buttonSignChoice = this.buttonSignForDisplay();
        return (  
            <div className="row counter">
                <div className="col-1">
                    {buttonSignChoice}
                </div>
            </div>
        );
    }

    handleIncrement(){
        this.props.handleAddSubtract(this.props.by); 
    }

    handleDecrement(){
        this.props.handleAddSubtract(this.state.counter);
    }

    handleReset(){
        this.setState({
            counter: 0
        });
    }

    buttonSignForDisplay(){
        if (this.props.by > 0){
            return <button className="btn btn-primary" onClick = {this.handleIncrement}>+{this.props.by}</button>
        }
        else{
            return <button className="btn btn-primary" onClick = {this.handleIncrement}>{this.props.by}</button>
        }
    }
}

// If by is not supplied, the default value of by is set to 1
CounterButton.defaultProps = {
    by : 1,
}

// this will throw an error if by data type is other than number. The error is displayed in browser console
CounterButton.protoTypes = {
    by: PropTypes.number,
}
 
export default CounterButton;