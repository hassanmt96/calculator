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

    render(){
        return(
            <div>
                <h1>Result: {this.state.result}</h1>
                <input onChange={this.handleFirstNum} value={this.state.num1} placeholder='First number'/>
                <input onChange={this.handleSecNum} value={this.state.num2} placeholder='Second number'/>
            </div>
        );
    }
}

export default Calculator;