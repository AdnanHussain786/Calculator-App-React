import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

      getSine = (radians) => {
        return Math.sin(radians);
      }
      getCos = (radians) => {
        return Math.cos(radians);
      }
      getTan = (radians) => {
        return Math.tan(radians);
      }
      
      getLog = (radians) => {
        return Math.log(radians);
      }  
    
      calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }
       
        else if(this.state.result.includes('sin')){
            let result1 = this.state.result.indexOf("sin");
            result1 = result1+3;
            let result2 = this.state.result.slice(result1, result1+2);
            checkResult = this.state.result.replace('sin',this.getSine(result2))
        }
       

        else if(this.state.result.includes('cos')){
            let result1 = this.state.result.indexOf("cos");
            result1 = result1+3;
            let result2 = this.state.result.slice(result1, result1+2);
            checkResult = this.state.result.replace('cos',this.getCos(result2))
        }
        else if(this.state.result.includes('tan')){
            let result1 = this.state.result.indexOf("tan");
            result1 = result1+3;
            let result2 = this.state.result.slice(result1, result1+2);
            checkResult = this.state.result.replace('tan',this.getTan(result2))
        }
        else if(this.state.result.includes('log')){
            let result1 = this.state.result.indexOf("log");
            result1 = result1+3;
            let result2 = this.state.result.slice(result1, result1+2);
            checkResult = this.state.result.replace('log',this.getLog(result2))
        }
        else {
            checkResult = this.state.result
        }

        try {
            
            this.setState({
               
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <center>
                     <br/>
                    <h1><b> <u><i> Adnan Hussain 19-NTU-CS-1038</i></u></b></h1>
                </center>
                <div className="calculator-body">
                    <center>
                    <h1>Calculator</h1>
                    <br/>
                    <ResultComponent result={this.state.result}/>
                    <br/>
                    <KeyPadComponent onClick={this.onClick}/>
                    </center>
                </div>
                <div className="info">
                    <center>
                    
                    <p>Sine, Cosine and Tan are in radians</p>
                    <p>Log is : Natural logarithm (base e) of a number</p>
                    </center>
                </div>
            </div>
        );
    }
}

export default App;
