import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           result: 0,
           num1: '',
           num2: '' 
        } 
    }

    handleFirstNum = e => {
        const parseNum = parseInt(e.target.value, 10);
        const num1 = isNaN(parseNum) ? '' : parseNum;
        this.setState({ num1 });
    };

    handleSecNum = e => {
        const parseNum = parseInt(e.target.value, 10);
        const num2 = isNaN(parseNum) ? '' : parseNum;
        this.setState({ num2 });
    };

    add = () => {
        const result = this.state.num1 + this.state.num2;
        this.setState({ result });
    };
    
    minus = () => {
        const result = this.state.num1 - this.state.num2;
        this.setState({ result });
    };
    
    multiply = () => {
        const result = this.state.num1 * this.state.num2;
        this.setState({ result });
    };
    
    divide = () => {
        const result = this.state.num1 / this.state.num2;
        this.setState({ result });
    };
    
    clear = () => {
        this.setState({ num1: '', num2: '', result: 0 });
    };

    render(){
        const { num1, num2, result } = this.state;

        return(
            <div>
                <h1>Result: {result}</h1>
                <input onChange={this.handleFirstNum} value={num1} placeholder='First number'/>
                <input onChange={this.handleSecNum} value={num2} placeholder='Second number'/>
                <br/>
                <button onClick={this.add}>+</button> 
                <button onClick={this.minus}>-</button> 
                <button onClick={this.multiply}>*</button> 
                <button onClick={this.divide}>/</button>
                <button onClick={this.clear}>clear</button>
            </div>
        );
    }
}

export default Calculator;