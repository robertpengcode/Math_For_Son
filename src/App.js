import React, { Component } from 'react';
import './App.css';
import Questions from './Questions';
import Selections from './SelectionsForm';


class App extends Component{
  constructor() {
      super();
      this.state = {
          questions: [],
      }    
      this.generateQuestions = this.generateQuestions.bind(this);
  }

  generateQuestions(operator, firstDigit, secondDigit, howMany, changeId) {
    let firstNumbers = 0;
    let firstStart = 0;
    let secondNumbers = 0;
    let secondStart = 0;

    if (firstDigit === 1) {
      firstNumbers = 9;
      firstStart = 1;
    } else if (firstDigit === 2) {
      firstNumbers = 90;
      firstStart = 10;
    } else if (firstDigit === 3) {
      firstNumbers = 900;
      firstStart = 100;
    } 

    if (secondDigit === 1) {
      secondNumbers = 9;
      secondStart = 1;
    } else if (secondDigit === 2) {
      secondNumbers = 90;
      secondStart = 10;
    } else if (secondDigit === 3) {
      secondNumbers = 900;
      secondStart = 100;
    } 

    let questions = [];
    for (let i = 1; i <= howMany; i++) {
      let aQuestion = {};
      let switchNumber = 0;
      let firstNum = Math.floor(Math.random() * firstNumbers) + firstStart; 
      let secondNum = Math.floor(Math.random() * secondNumbers) + secondStart;
      if (operator === '-' && firstNum < secondNum) {
        switchNumber = firstNum;
        firstNum = secondNum;
        secondNum = switchNumber;
      }

      let answer = 0;
      switch (operator) {
        case '+':
          answer = firstNum + secondNum;
          break;
        case '-':
          answer = firstNum - secondNum;
          break;
        case 'x':
          answer = firstNum * secondNum;
          break;
        default:
          console.log('Sorry, please pick a valid operator!');
      }
      if (howMany > 1) {
        aQuestion.id = i;
      } else {
        aQuestion.id = changeId;
      }
      aQuestion.operator = operator;
      aQuestion.firstNum = firstNum; 
      aQuestion.secondNum = secondNum;  
      aQuestion.answer = answer;
      aQuestion.firstDigit = firstDigit;
      aQuestion.secondDigit = secondDigit;
      questions.push(aQuestion);
    }
    if (howMany > 1) {
      this.setState( {questions: questions} );
    } 
    else {
      let updateQuestions = [...this.state.questions];
      let updateIndex = changeId - 1;
      updateQuestions.splice(updateIndex, 1, questions[0]);
      this.setState( {questions: updateQuestions} );
    }
  }

  render() {
    const { generateQuestions } = this;
    const { questions } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Noah's Math Questions</h1>
          <Selections generateQuestions = {generateQuestions}/>
        </header>
        <Questions questions = {questions} generateQuestions = {generateQuestions}/>
      </div>
    );
  }
}

export default App;
