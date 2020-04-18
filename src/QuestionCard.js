import React from 'react';
import './QuestionCard.css';

const QuestionCard = ({question, generateQuestions}) => {

    let operator = question.operator;
    let firstDigit = question.firstDigit;
    let secondDigit = question.secondDigit;
    let changeId = question.id;

    return (
        <div className='questionCard'>
            <div className='id_replace'>
                <span className='element questionId'>Q{question.id}</span>
                <button className='replaceBTN' onClick={()=>generateQuestions(operator,firstDigit,secondDigit,1,changeId)}>Replace</button>
            </div>
            <div className='questionBox'>
                <span className='element firstNum'>{question.firstNum}</span>
                <span className='element operator_secondNum'>{question.operator +'  '+ question.secondNum}</span>
            </div> 
        </div>
    )
}

export default QuestionCard;