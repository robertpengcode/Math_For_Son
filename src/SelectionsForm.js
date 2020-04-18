import React, { Component } from 'react';
import './SelectionsForm.css';

class Selections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operator: '+',
            firstDigit: 1,
            secondDigit: 1,
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(ev){
        ev.preventDefault();
        let { operator, firstDigit, secondDigit } = this.state;
        firstDigit = Number(firstDigit);
        secondDigit = Number(secondDigit);
        this.props.generateQuestions(operator, firstDigit, secondDigit, 20);
    }

    render() {
        const { operator, firstDigit, secondDigit } = this.state;
        return (
            <form className='selections' onSubmit={this.onSubmit}>
                <ul className='selectionsList'>
                    <label>Operator&nbsp;
                    <select className='oneSelection' value={operator} 
                    onChange={ ev => this.setState({operator: ev.target.value })} >
                        <option>+</option>
                        <option>-</option>
                        <option>x</option>
                    </select>
                    </label>
                    <label>First Number&nbsp;
                    <select className='oneSelection' value={firstDigit}
                    onChange={ ev => this.setState({firstDigit: ev.target.value })}>
                        <option value='1'>1-Digit</option>
                        <option value='2'>2-Digit</option>
                        <option value='3'>3-Digit</option>
                    </select>
                    </label>
                    <label>Second Number&nbsp;
                    <select className='oneSelection' value={secondDigit}
                    onChange={ ev => this.setState({secondDigit: ev.target.value })}>
                        <option value='1'>1-Digit</option>
                        <option value='2'>2-Digit</option>
                        <option value='3'>3-Digit</option>
                    </select>
                    </label>
                    <button className='button' >Generate Questions</button>
                </ul>
            </form>
        )
    }
}

export default Selections;