import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                
                <button id='indiviulaKeys' name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button id='indiviulaKeys' name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button id='indiviulaKeys' name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button id='special1' name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                <button id='special1' name="sin" onClick={e => this.props.onClick(e.target.name)}>sin</button>
                <br/>

                <button id='indiviulaKeys' name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button id='indiviulaKeys' name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button id='indiviulaKeys' name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button id='special2' name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                <button id='special2' name="cos" onClick={e => this.props.onClick(e.target.name)}>cos</button>
                <br/>

                <button id='indiviulaKeys' name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button id='indiviulaKeys' name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button id='indiviulaKeys' name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>     
                <button id='special3' name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
                <button id='special3' name="tan" onClick={e => this.props.onClick(e.target.name)}>tan</button>
                <br/>

                <button id='indiviulaKeys' name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button id='special5' name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button id='indiviulaKeys' name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button id='special4' name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                <button id='special4' name="log" onClick={e => this.props.onClick(e.target.name)}>log</button><br/>
                

                
                {/* <button id='indiviulaKeys' name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button id='indiviulaKeys' name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>               
                <button id='indiviulaKeys' name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button id='CE' name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button> */}
            </div>
        );
    }
}


export default KeyPadComponent;
