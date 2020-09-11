import React from 'react';

class Calculator extends React.Component{
    constructor(){
        super();
        this.state={
            num1: 0,
            num2: 0,
            result: 0,
            symbol:'',
        }
        this.handleGetResult= this.handleGetResult.bind(this)
    }

    handleInput(field){
        return e=> this.setState( { [field]:e.target.value } )
    }

    handleGetResult(e){
        e.preventDefault;
        switch (this.state.symbol) {
            case '+':
                return this.setState({
                  result:
                    this.state.num1 + this.state.num2,
                });
            case '-':
                return this.setState({result: this.state.num1 - this.state.num2})
            case '*':
                return this.setState({result: this.state.num1 * this.state.num2});
            case '/':
                if(num2 !== 0)
                return this.setState({
                  result: this.state.num1 / this.state.num2,
                });
                else return window.alert('num2 cant be 0')
            default:
                return this.setState({ result: this.state.num1 + this.state.num2 });
        }
    }
    render(){  
        return (
          <div>
            <label>
              {" "}
              num1:
              <input
                type="text"
                value={this.state.num1}
                onChange={this.handleInput("num1")}
             
              />
            </label>

            <label>
              <select value={this.state.symbol} onChange={this.handleInput('symbol')}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
            </label>

            <label>
              {" "}
              num2:
              <input
                type="text"
                value={this.state.num2}
                onChange={this.handleInput("num2")}

              />
            </label>

            <button onClick={this.handleGetResult}>=</button>
            <span>{this.state.result}</span>
          </div>
        );

    }
}

export default Calculator;